const deliverToast = require('./make-toast');

const loginFormHandler = async (event) => {
  event.preventDefault();

  //get the values from the form
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  //send the data to the server
  const response = await fetch('/user/api/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  //check the response status
  //redirect if successful; url comes from express route
  if (response.ok) {
    return response.json().then((data) => {
      document.location.replace(data.url);
    });
  } else {
    response.json().then((data) => {
      deliverToast(data);
    });
  }
};

// Check if the login form exists and add the event listener
let loginForm = document.querySelector('#login-form') !== null;
if (loginForm) {
  document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
}
