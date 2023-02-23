const deliverToast = require('./make-toast');

const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/user/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(JSON.stringify(response));
    if (response.ok) {
      document.location.replace('/games');
    } else {
      response.json().then((data) => {
        deliverToast(data.message);
      });
    }
  }
};

console.log('login.js loaded');

let loginForm = document.querySelector('#login-form') !== null;
if (loginForm) {
  document
    .querySelector('#login-form')
    .addEventListener('submit', loginFormHandler);
}
