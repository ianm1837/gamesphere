const deliverToast = require('./make-toast');

const createPostForm = document.getElementById('postForm');
if (createPostForm) {
  createPostForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const postTitle = document.getElementById('newPostTitle').value;
    const postContent = document.getElementById('newPostContent').value;
    const postGame = document.getElementById('newPostGame').dataset.game;

    console.log('post game ', postGame);

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
        console.log('Post created successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
}
