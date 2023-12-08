const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const username = form.elements.username.value;
  const password = form.elements.password.value;
  
  if (username === 'admin' && password === 'password') {
    alert('Login successful!');
  } else {
    alert('Invalid username or password');
  }
});
