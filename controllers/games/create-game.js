const router = require('express').Router();

// you are here: /games/create-game
router.get('/', (req, res) => {
  // if the user is not logged in, redirect to the home page
  if (!req.session.loggedIn) {
    res.redirect('/');
  }

  // store the session variables
  let loginStatus = req.session.loggedIn;
  let loggedInUser = req.session.username;

  // render the page with user status
  res.render('create-game', {
    loginStatus,
    loggedInUser,
  });
});

module.exports = router;
