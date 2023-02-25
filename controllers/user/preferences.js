const router = require('express').Router();

// TODO: this is a placeholder for the preferences page and is unfinished.

// you are here: /user/preferences
router.get('/', (req, res) => {
  // set session variables to send to handlebars
  let loginStatus = req.session.loggedIn;
  let loggedInUser = req.session.username;

  res.render('preferences', {
    loggedInUser,
    loginStatus,
  });
});

module.exports = router;
