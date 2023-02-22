const router = require('express').Router();

//you are here: /user/create-account
router.get('/', (req, res) => {

  let loginStatus = req.session.loggedIn;
  let loggedInUser = req.session.username;

  res.render('create-account', {
    loggedInUser,
    loginStatus,
  });
});

module.exports = router;
