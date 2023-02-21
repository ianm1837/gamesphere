// you are here: /games/create-game

const router = require('express').Router();



router.get('/', (req, res) => {

  let loginStatus = req.session.loggedIn
  let loggedInUser = req.session.username

  res.render('create-game', {
    loginStatus,
    loggedInUser,
  }
  );
});

module.exports = router;