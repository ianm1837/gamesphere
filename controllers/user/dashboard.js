const router = require('express').Router();

// TODO: add routes for user dashboard. This is completely unfinished.

// you are here: /user/dashboard
router.get('/', (req, res) => {
  // set session variables to send to handlebars
  let loginStatus = req.session.loggedIn;
  let loggedInUser = req.session.username;

  res.render('dashboard', {
    loginStatus,
    loggedInUser,
  });
});

module.exports = router;
