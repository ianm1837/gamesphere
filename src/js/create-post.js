const deliverToast = require('./make-toast');

// gather form data and send it to the server as json
const createPostForm = document.getElementById('postForm');
if (createPostForm) {
  createPostForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // get the post data
    const postTitle = document.getElementById('newPostTitle').value;
    const postContent = document.getElementById('newPostContent').value;
    const postGame = document.getElementById('newPostGame').dataset.game;

    // send the post data to the server
    fetch('/posts/api/create-post', {
      method: 'POST',
      body: JSON.stringify({
        postContent: postContent,
        postTitle: postTitle,
        postGame: postGame,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        // TODO: redirect the user to the post details page for the post they just created and remove console.log
        console.log('Post created successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
}
