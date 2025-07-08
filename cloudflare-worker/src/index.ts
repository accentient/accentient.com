const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // Change to your domain in production
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
    }

    try {
      const formData = await request.json();
      const recaptchaToken = formData["recaptchaToken"];

      console.log("Received reCAPTCHA token:", recaptchaToken);

      if (!recaptchaToken) {
        return new Response("Missing CAPTCHA token", {
          status: 400,
          headers: corsHeaders,
        });
      }

      const verifyResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${env.RECAPTCHA_SECRET}&response=${recaptchaToken}`,
      });

      const verification = await verifyResponse.json();
      console.log("Google verification response:", verification);

      if (!verification.success || verification.score < 0.5) {
        return new Response("CAPTCHA verification failed", {
          status: 403,
          headers: corsHeaders,
        });
      }

      const name = formData.name || "Anonymous";
      const email = formData.email || "N/A";
      const subject = formData.subject || "No Subject";
      const message = formData.message || "";

      console.log(`Contact form from ${name} <${email}>: [${subject}] ${message}`);

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
          headers: corsHeaders,
        });
      }

      return new Response("Contact form submitted successfully!", {
        status: 200,
        headers: corsHeaders,
      });
    } catch (err) {
      console.error("Worker error:", err);
      return new Response("Internal Server Error", {
        status: 500,
        headers: corsHeaders,
      });
    }
  },
};

interface Env {
  RECAPTCHA_SECRET: string;
  RESEND_API_KEY: string;
}