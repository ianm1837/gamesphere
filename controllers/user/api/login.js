const router = require('express').Router();
const { User } = require('../../../models');

// you are here: /user/api/login
router.post('/', async (req, res) => {
  console.log('what about here');
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    console.log('this is dbUserData: ' + JSON.stringify(dbUserData));

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.passwordCheck(req.body.password);

    console.log('this is validPassword: ' + JSON.stringify(validPassword));

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password. Please try again!' });
      return;
    }

    // save user data in session
    req.session.save(() => {
      req.session.username = req.body.username;
      req.session.user_id = dbUserData.id;
      req.session.loggedIn = true;

      console.log('this is req.session: ' + JSON.stringify(req.session));

      res.status(200).send();
    });
  } catch (err) {
    console.log('am I here?');
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
