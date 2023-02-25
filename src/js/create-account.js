const deliverToast = require("./make-toast");

async function signupFormHandler(event) {
  event.preventDefault();

  //get the values from the form
  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const passwordConfirm = document.querySelector("#password-signup-confirm").value.trim();

  //check if the passwords match
  if (password != passwordConfirm) {
    deliverToast("Passwords do not match!");
    return;
  }

  //send the data to the server
  const response = await fetch("/user/api/create-account", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" },
  });

  //check the response status
  //redirect if successful; url comes from express route
  if (response.ok) {
    return response.json().then((data) => {
      document.location.replace(data.url);
    });
  } else {
    deliverToast("Unknown server error");
  }
}

//check if the signup form exists
//add event listener to the form submit if it does
let signupForm = document.querySelector("#createAccountForm") !== null;
if (signupForm) {
  document.querySelector("#createAccountForm").addEventListener("submit", signupFormHandler);
}
