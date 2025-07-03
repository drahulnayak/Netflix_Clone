document.getElementById('signinForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (response.ok) {
    alert('Login successful!');
    // Redirect to homepage or dashboard
    window.location.href = 'index.html';
  } else {
    document.getElementById('error-message').innerText = data.message || 'Login failed.';
  }
});
