import { createExecutionContext, waitOnExecutionContext } from 'cloudflare:test';
import { describe, it, expect, vi, afterEach } from 'vitest';
import worker from '../src';

// Minimal env matching the Worker's `interface Env`. Real values are secrets in
// Cloudflare; tests only need non-empty strings.
const TEST_ENV = {
	RECAPTCHA_SECRET: 'test-secret',
	RESEND_API_KEY: 'test-resend-key',
} as any;

const ALLOWED_ORIGIN = 'https://accentient.com';

// A reCAPTCHA siteverify response that passes every gate. Individual tests
// override fields to exercise each failure path.
function passingVerification(overrides: Record<string, unknown> = {}) {
	return { success: true, score: 0.9, action: 'submit', hostname: 'accentient.com', ...overrides };
}

// Replace global fetch so no network calls leave the test. Routes by URL:
// Google siteverify returns `verify`, Resend returns `resendStatus`.
function stubFetch(opts: { verify?: unknown; resendStatus?: number; resendBody?: string }) {
	const mock = vi.fn(async (input: RequestInfo | URL) => {
		const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
		if (url.includes('siteverify')) {
			return new Response(JSON.stringify(opts.verify ?? passingVerification()), {
				headers: { 'Content-Type': 'application/json' },
			});
		}
		if (url.includes('resend.com')) {
			return new Response(opts.resendBody ?? 'ok', { status: opts.resendStatus ?? 200 });
		}
		throw new Error(`Unexpected fetch to ${url}`);
	});
	vi.stubGlobal('fetch', mock);
	return mock;
}

function post(body: unknown, origin = ALLOWED_ORIGIN) {
	return new Request('https://accentient.com/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', Origin: origin, 'CF-Connecting-IP': '203.0.113.7' },
		body: JSON.stringify(body),
	});
}

async function run(request: Request) {
	const ctx = createExecutionContext();
	const response = await worker.fetch(request, TEST_ENV, ctx);
	await waitOnExecutionContext(ctx);
	return response;
}

const validPayload = {
	name: 'Ada Lovelace',
	email: 'ada@example.com',
	subject: 'Hello',
	message: 'I would like to book a course.',
	recaptchaToken: 'tok_valid',
};

afterEach(() => {
	vi.unstubAllGlobals();
	vi.restoreAllMocks();
});

describe('CORS / method handling', () => {
	it('answers OPTIONS preflight with 204 and the allowed origin', async () => {
		const res = await run(new Request('https://accentient.com/', { method: 'OPTIONS', headers: { Origin: ALLOWED_ORIGIN } }));
		expect(res.status).toBe(204);
		expect(res.headers.get('Access-Control-Allow-Origin')).toBe(ALLOWED_ORIGIN);
	});

	it('reflects www.accentient.com as an allowed origin', async () => {
		const res = await run(new Request('https://accentient.com/', { method: 'OPTIONS', headers: { Origin: 'https://www.accentient.com' } }));
		expect(res.headers.get('Access-Control-Allow-Origin')).toBe('https://www.accentient.com');
	});

	it('does NOT grant CORS to a disallowed origin (falls back to canonical)', async () => {
		const res = await run(new Request('https://accentient.com/', { method: 'OPTIONS', headers: { Origin: 'https://evil.example' } }));
		expect(res.headers.get('Access-Control-Allow-Origin')).toBe(ALLOWED_ORIGIN);
	});

	it('rejects non-POST methods with 405', async () => {
		const res = await run(new Request('https://accentient.com/', { method: 'GET', headers: { Origin: ALLOWED_ORIGIN } }));
		expect(res.status).toBe(405);
	});
});

describe('CAPTCHA verification', () => {
	it('returns 400 when the reCAPTCHA token is missing', async () => {
		stubFetch({});
		const res = await run(post({ ...validPayload, recaptchaToken: undefined }));
		expect(res.status).toBe(400);
		expect(await res.text()).toBe('Missing CAPTCHA token');
	});

	it('returns 403 when verification is unsuccessful', async () => {
		stubFetch({ verify: passingVerification({ success: false }) });
		const res = await run(post(validPayload));
		expect(res.status).toBe(403);
	});

	it('returns 403 when the score is below threshold', async () => {
		stubFetch({ verify: passingVerification({ score: 0.3 }) });
		expect((await run(post(validPayload))).status).toBe(403);
	});

	it('returns 403 when the action does not match', async () => {
		stubFetch({ verify: passingVerification({ action: 'login' }) });
		expect((await run(post(validPayload))).status).toBe(403);
	});

	it('returns 403 when the hostname is not one of ours', async () => {
		stubFetch({ verify: passingVerification({ hostname: 'phishing.example' }) });
		expect((await run(post(validPayload))).status).toBe(403);
	});

	it('sends secret, response token, and remoteip to Google, URL-encoded', async () => {
		const mock = stubFetch({});
		await run(post(validPayload));
		const verifyCall = mock.mock.calls.find(([url]) => String(url).includes('siteverify'));
		expect(verifyCall).toBeDefined();
		const body = (verifyCall![1] as RequestInit).body as string;
		const params = new URLSearchParams(body);
		expect(params.get('secret')).toBe('test-secret');
		expect(params.get('response')).toBe('tok_valid');
		expect(params.get('remoteip')).toBe('203.0.113.7');
	});
});

describe('Happy path and email delivery', () => {
	it('returns 200 and calls Resend when everything passes', async () => {
		const mock = stubFetch({});
		const res = await run(post(validPayload));
		expect(res.status).toBe(200);
		expect(await res.text()).toBe('Contact form submitted successfully!');
		const resendCall = mock.mock.calls.find(([url]) => String(url).includes('resend.com'));
		expect(resendCall).toBeDefined();
		expect((resendCall![1] as RequestInit).headers).toMatchObject({ Authorization: 'Bearer test-resend-key' });
	});

	it('returns 500 when Resend fails', async () => {
		stubFetch({ resendStatus: 422, resendBody: 'rejected' });
		const res = await run(post(validPayload));
		expect(res.status).toBe(500);
		expect(await res.text()).toBe('Failed to send email');
	});
});
