const deliverToast = require('./make-toast');

// gather form data and send it to the server as json
const commentFormHandler = async (event) => {
  event.preventDefault();

  // get the comment data and the post id
  const commentData = document.querySelector('#comment-content').value.trim();
  const postId = document.querySelector('#post-title').dataset.postNumber;

  // if the comment data is not empty, send it to the server
  // TODO: instead of checking for empty this should be handled on the page by adding "required" to the form elements
  if (commentData) {
    const response = await fetch('/posts/api/create-comment', {
      method: 'POST',
      body: JSON.stringify({ commentData, postId }),
      headers: { 'Content-Type': 'application/json' },
    });

    // if the response is ok, reload the page
    if (response.ok) {
      document.location.reload();
    } else {
      // otherwise, deliver a toast with the error message
      response.json().then((data) => {
        deliverToast(data);
      });
    }
  }
};

// check if the button exists before adding the event listener
// TODO: this should instead listen for the form to be submitted. see create-post.js
let signupButton = document.querySelector('#post-comment-button') !== null;
if (signupButton) {
  document.querySelector('#post-comment-button').addEventListener('click', commentFormHandler) !==
    null;
}
