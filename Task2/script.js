document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const fullName = document.getElementById('fullname');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');
  const formMessage = document.querySelector('.form-message');

  // Basic validation
  if (!fullName.value || !email.value || !subject.value || !message.value) {
    formMessage.textContent = "Please fill out all fields.";
    formMessage.style.color = "#ff4d4d";
    return;
  }

  // Email format validation
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailRegex.test(email.value)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "#ff4d4d";
    return;
  }

  // Simulate successful submission
  formMessage.textContent = "Message sent successfully!";
  formMessage.style.color = "#00ffae";

  // Clear form
  fullName.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
});