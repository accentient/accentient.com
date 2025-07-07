<?php
// contact-form-handler.php

// Replace with your secret key from Google reCAPTCHA
$recaptchaSecret = 'YOUR_SECRET_KEY';

// Get POST data safely
$name    = htmlspecialchars(trim($_POST['name']));
$email   = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
$subject = htmlspecialchars(trim($_POST['subject']));
$message = htmlspecialchars(trim($_POST['message']));
$recaptchaResponse = $_POST['g-recaptcha-response'];

// Verify reCAPTCHA
$recaptcha = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptchaSecret&response=$recaptchaResponse");
$recaptcha = json_decode($recaptcha);

if (!$recaptcha->success) {
    die("reCAPTCHA failed. Please try again.");
}

// Validate fields
if (!$name || !$email || !$message) {
    die("Missing required fields.");
}

// Email setup
$to = 'info@accentient.com';
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

$body = "Name: $name\nEmail: $email\nSubject: $subject\n\n$message";

if (mail($to, "Contact Form: $subject", $body, $headers)) {
    echo "Message sent successfully!";
} else {
    echo "Message could not be sent.";
}
?>