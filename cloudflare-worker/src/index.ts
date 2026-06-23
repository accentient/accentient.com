// Origins allowed to call this Worker from the browser (CORS).
const ALLOWED_ORIGINS = [
  "https://accentient.com",
  "https://www.accentient.com",
];

// Hostnames reCAPTCHA is expected to report in its verification response.
const ALLOWED_HOSTNAMES = ["accentient.com", "www.accentient.com"];

// The action name set by the frontend in grecaptcha.execute(..., { action: "submit" }).
const EXPECTED_ACTION = "submit";

// Minimum reCAPTCHA v3 score to accept (0.0 = bot, 1.0 = human).
const MIN_SCORE = 0.5;

function corsHeaders(origin: string | null): Record<string, string> {
  // Reflect the request origin only when it is on the allow-list; otherwise
  // fall back to the canonical origin so disallowed sites get no CORS grant.
  const allowed = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

interface SiteVerifyResponse {
  success: boolean;
  score?: number;
  action?: string;
  hostname?: string;
  "error-codes"?: string[];
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const headers = corsHeaders(request.headers.get("Origin"));

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405, headers });
    }

    try {
      const formData = (await request.json()) as {
        recaptchaToken?: string;
        name?: string;
        email?: string;
        subject?: string;
        message?: string;
      };
      const recaptchaToken = formData.recaptchaToken;

      if (!recaptchaToken) {
        return new Response("Missing CAPTCHA token", {
          status: 400,
          headers,
        });
      }

      const verifyResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: env.RECAPTCHA_SECRET,
          response: recaptchaToken,
          // Google uses the caller IP to improve scoring; empty values are ignored.
          remoteip: request.headers.get("CF-Connecting-IP") ?? "",
        }).toString(),
      });

      const verification = (await verifyResponse.json()) as SiteVerifyResponse;

      // Reject unless the token is valid, scores high enough, was issued for the
      // expected action, and was solved on one of our own hostnames.
      if (
        !verification.success ||
        (verification.score ?? 0) < MIN_SCORE ||
        verification.action !== EXPECTED_ACTION ||
        !ALLOWED_HOSTNAMES.includes(verification.hostname ?? "")
      ) {
        return new Response("CAPTCHA verification failed", {
          status: 403,
          headers,
        });
      }

      const name = formData.name || "Anonymous";
      const email = formData.email || "N/A";
      const subject = formData.subject || "No Subject";
      const message = formData.message || "";

      // ✅ Send email via Resend
      const sendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Accentient Website <info@buildmeasurelearn.com>",
          to: "info@accentient.com",
          subject: `Query from: ${name}`,
          text: `Name
${name}

Email
${email}

Subject
${subject}

Comment or Message
${message}
          `,
        }),
      });

      if (!sendRes.ok) {
        const errorText = await sendRes.text();
        console.error("Resend error:", errorText);
        return new Response("Failed to send email", {
          status: 500,
          headers,
        });
      }

      return new Response("Contact form submitted successfully!", {
        status: 200,
        headers,
      });
    } catch (err) {
      console.error("Worker error:", err);
      return new Response("Internal Server Error", {
        status: 500,
        headers,
      });
    }
  },
};

interface Env {
  RECAPTCHA_SECRET: string;
  RESEND_API_KEY: string;
}
