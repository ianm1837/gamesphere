const router = require('express').Router();
const { User } = require('../../../models');

// you are here: /user/api/create-account
router.post('/', async (req, res) => {
  try {
    // Check the database to see if username already exists
    const dbFindUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    // If username or password is less than 8 characters, send error message
    if (req.body.username.length < 8 || req.body.password.length < 8) {
      throw new Error('Username and password must be at least 8 characters long.');
    }

    // If username exists, send error message
    if (dbFindUserData) {
      throw new Error('Username already exists. Please try again!');
    }

    // all good, create the user

    const dbNewUserData = await User.create({
      username: req.body.username,
      password: req.body.password,
      twoFactor: 'placeholder',
    });

    // set session variables
    // this creates the cookie
    req.session.save(() => {
      req.session.username = req.body.username;
      req.session.user_id = dbNewUserData.dataValues.id;
      req.session.loggedIn = true;

      // send the user the desired url as json
      res.status(200).json({ url: '/user/dashboard' });
    });
  } catch (error) {
    // if there is an error, send it to the client and log it in the console
    console.log('WARNING: User entered wrong credentials');
    res.status(500).json(error.message);
  }
});

module.exports = router;
