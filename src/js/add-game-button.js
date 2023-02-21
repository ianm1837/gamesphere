const deliverToast = require('./make-toast');

const addGameButtonHandler = async (event) => {
  document.location.replace('/games/create-game');
};

let addGameButton = document.querySelector('#add-game-button') !== null;
if (addGameButton) {
  document
    .querySelector('#add-game-button')
    .addEventListener('click', addGameButtonHandler);
}
