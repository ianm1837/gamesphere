// this is a function that creates a toast message using the message passed to it
function deliverToast(message) {
  const headerToast = document.getElementById('error-toast');
  const toastBody = document.getElementById('toast-body');
  toastBody.innerText = message;
  const toast = new bootstrap.Toast(headerToast);

  toast.show();
}

module.exports = deliverToast;
