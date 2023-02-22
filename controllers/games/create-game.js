// you are here: /games/create-game

const router = require('express').Router();

router.get('/', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
  }

  let loginStatus = req.session.loggedIn;
  let loggedInUser = req.session.username;

  res.render('create-game', {
    loginStatus,
    loggedInUser,
  });
});

module.exports = router;
