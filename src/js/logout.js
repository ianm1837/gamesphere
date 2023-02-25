const deliverToast = require('./make-toast');

const logoutHandler = async () => {
  // send a logout request to the server
  const response = await fetch('/user/api/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  // if the response is ok, redirect the user to the home page
  if (response.ok) {
    document.location.replace('/');
  } else {
    response.json().then((data) => {
      deliverToast(data.message);
    });
  }
};

// check if the button exists before adding the event listener
let logoutButton = document.querySelector('#logout') !== null;
if (logoutButton) {
  document.querySelector('#logout').addEventListener('click', logoutHandler);
}
