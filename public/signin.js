document.getElementById('signinForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email && password) {
    alert('Signed in successfully!');
    window.location.href = 'index.html'; // redirect to homepage
  } else {
    document.getElementById('error-message').textContent = 'Please enter email and password.';
  }
});
