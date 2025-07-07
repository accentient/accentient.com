const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // You can replace * with 'http://localhost:1313' later
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: corsHeaders,
      });
    }

    try {
      const formData = await request.json();
      const recaptchaToken = formData["recaptchaToken"];

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

      if (!verification.success) {
        return new Response("CAPTCHA verification failed", {
          status: 403,
          headers: corsHeaders,
        });
      }

      const name = formData.name || "Anonymous";
      const email = formData.email || "N/A";
      const subject = formData.subject || "";
      const message = formData.message || "";

      console.log(`Contact form from ${name} <${email}>: [${subject}] ${message}`);

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