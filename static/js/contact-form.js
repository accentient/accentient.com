document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const submitButton = form.querySelector("button[type='submit']");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (submitButton) submitButton.disabled = true;

    grecaptcha.ready(function () {
      grecaptcha
        .execute("6LedF4ggAAAAAJk8ubg6phydjkXaIRMAgvyKgg47", { action: "submit" })
        .then(async function (token) {
          try {
            const res = await fetch("https://cloudflare-worker.richard-dd5.workers.dev/", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: form.name.value.trim(),
                email: form.email.value.trim(),
                subject: form.subject.value.trim(),
                message: form.message.value.trim(),
                recaptchaToken: token // make sure your Worker uses this key
              }),
            });

            const responseText = await res.text();

            if (res.ok) {
              alert("✅ Message sent!");
              form.reset();
            } else {
              alert("❌ Error: " + responseText);
            }
          } catch (err) {
            alert("❌ Network error. Please try again later.");
            console.error("Form submission error:", err);
          } finally {
            if (submitButton) submitButton.disabled = false;
          }
        });
    });
  });
});