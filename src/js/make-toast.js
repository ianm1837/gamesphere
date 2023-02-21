function deliverToast(message) {
  const toastLiveExample = document.getElementById('error-toast');
  const toastBody = document.getElementById('toast-body');
  toastBody.innerText = message;
  const toast = new bootstrap.Toast(toastLiveExample);

  toast.show();
}

module.exports = deliverToast;
