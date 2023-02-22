const router = require('express').Router();

router.get('/', (req, res) => {

   let loginStatus = req.session.loggedIn
   let loggedInUser = req.session.username

   console.log('login status: ' + loginStatus)

    res.render('dashboard', {
    loginStatus,
    loggedInUser,
  });
});

module.exports = router;