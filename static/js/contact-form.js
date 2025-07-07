document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    grecaptcha.ready(function () {
      grecaptcha.execute('6LedF4ggAAAAAJk8ubg6phydjkXaIRMAgvyKgg47', { action: 'submit' }).then(async function (token) {
        try {
          const res = await fetch('https://cloudflare-worker.richard-dd5.workers.dev/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: form.name.value,
              email: form.email.value,
              subject: form.subject.value,
              message: form.message.value,
              recaptchaToken: token
            })
          });

          const text = await res.text();

          if (res.ok) {
            alert("✅ Message sent!");
            form.reset();
          } else {
            alert("❌ Error: " + text);
          }
        } catch (err) {
          alert("❌ Network error. Please try again later.");
          console.error(err);
        }
      });
    });
  });
});