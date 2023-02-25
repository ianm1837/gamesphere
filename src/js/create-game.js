const deliverToast = require('./make-toast');

// gather form data and send it to the server as json
const createGameForm = document.getElementById('uploadForm');
if (createGameForm) {
  createGameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // create a new FormData object and add the form data to it
    const formData = new FormData(createGameForm);

    // send the form data to the server
    fetch('/games/api/create-game', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        // TODO: redirect the user to the game details page for the game they just created
        console.log('File uploaded successfully!');
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
  });
}
