
// Simple mailto handler to send contact form via user's email client
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }
    const subject = encodeURIComponent('Website Inquiry from ' + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:alt.easybook@gmail.com?subject=${subject}&body=${body}`;
  });
});
