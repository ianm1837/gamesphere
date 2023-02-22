const deliverToast = require('./make-toast');

const commentFormHandler = async (event) => {
  event.preventDefault();

  const commentData = document.querySelector('#comment-content').value.trim();
  const postId = document.querySelector('#post-title').dataset.postNumber;

  if (commentData) {
    const response = await fetch('/posts/api/create-comment', {
      method: 'POST',
      body: JSON.stringify({ commentData, postId }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();

      // console.log('response ok');
      // return;
    } else {
      response.json().then((data) => {
        deliverToast(data.message);
      });
    }
  }
};

let signupButton = document.querySelector('#post-comment-button') !== null;
if (signupButton) {
  document
    .querySelector('#post-comment-button')
    .addEventListener('click', commentFormHandler) !== null;
}
