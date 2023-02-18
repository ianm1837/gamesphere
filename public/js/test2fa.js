// Get the HTML form elements
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');
const loginButton = document.getElementById('login-button');
const twofaContainer = document.getElementById('2fa-container');
const verificationForm = document.getElementById('verification-form');
const secretInput = document.getElementById('secret-input');
const tokenInput = document.getElementById('token-input');
const submitButton = document.getElementById('submit-button');

// Handle login form submission
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Check the user's credentials
  const username = usernameInput.value;
  const password = passwordInput.value;
  const isValidCredentials = checkCredentials(username, password);

  // If the credentials are valid, show the 2FA form and generate a secret key
  if (isValidCredentials) {
    twofaContainer.style.display = 'block';
    const secret = generateSecret(username);
    secretInput.value = secret.base32;
  } else {
    alert('Invalid username or password');
  }
});

// Handle 2FA form submission
verificationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Verify the user's TOTP
  const username = usernameInput.value;
  const secret = getSecret(username);
  if (!secret) {
    alert('Invalid user');
    return;
  }

  const verified = speakeasy.totp.verify({
    secret: secret,
    encoding: 'base32',
    token: tokenInput.value,
    window: 2
  });

  if (verified) {
    alert('Verification successful!');
    clearFormData();
  } else {
    alert('Verification failed!');
  }
});

// Check the user's credentials
function checkCredentials(username, password) {
  // In a real application, this would check the user's credentials against a database
  return username === 'example' && password === 'password';
}

// Generate a secret key and save it for the user
function generateSecret(username) {
  const secret = speakeasy.generateSecret