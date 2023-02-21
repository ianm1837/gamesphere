const router = require('express').Router();

router.get('/', (req, res) => {

   let loginStatus = req.session.loggedIn

   console.log('login status: ' + loginStatus)

    res.render('dashboard', {
    loginStatus,
  });
});

module.exports = router;