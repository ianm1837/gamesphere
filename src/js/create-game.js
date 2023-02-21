const deliverToast = require('./make-toast');

const newGameFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#new-game-title').value.trim();
  const content = document.querySelector('#new-game-content').value.trim();
  const timestamp = Date.now();

  if (title && content) {
    const response = await fetch('/games/api/create-game', {
      method: 'POST',
      body: JSON.stringify({ title, timestamp, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/games/all-games');
    } else {
      response.json().then((data) => {
        deliverToast(data.message);
      });
    }
  }
};

let newGameButton = document.querySelector('#new-game-button') !== null;
if (newGameButton) {
  document
    .querySelector('#new-game-button')
    .addEventListener('click', newGameFormHandler);
}
