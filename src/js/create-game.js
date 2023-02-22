const deliverToast = require('./make-toast');



const createGameForm = document.getElementById('uploadForm');
if (createGameForm) {
  createGameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(createGameForm);

    fetch('/games/api/create-game', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        console.log('File uploaded successfully!');
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
  });
}
