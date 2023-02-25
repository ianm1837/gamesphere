const router = require('express').Router();

// you are here: /user/login
router.get('/', (req, res) => {
  // set session variables to send to handlebars
  let loginStatus = req.session.loggedIn;
  let loggedInUser = req.session.username;

  // send the session variables to handlebars and render the page
  res.render('login', {
    loginStatus,
    loggedInUser,
  });
});

module.exports = router;
