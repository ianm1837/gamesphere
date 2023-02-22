const deliverToast = require('./make-toast');

const newPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#new-post-title').value.trim();
  const content = document.querySelector('#new-post-content').value.trim();
  const timestamp = Date.now();

  if (title && content) {
    const response = await fetch('/posts/api/create-post', {
      method: 'POST',
      body: JSON.stringify({ title, timestamp, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/user/dashboard');
    } else {
      response.json().then((data) => {
        deliverToast(data.message);
      });
    }
  }
};

let newPostButton = document.querySelector('.new-post-button') !== null;
if (newPostButton) {
  document
    .querySelector('.new-post-button')
    .addEventListener('click', newPostFormHandler);
}
