const router = require('express').Router();
const { User } = require('../../../models');

// you are here: /user/api/login
router.post('/', async (req, res) => {
  // Check the database to see if username already exists
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    // If username does not exist, send error message
    if (!dbUserData) {
      throw new Error('Incorrect username or password. Please try again!');
    }

    // check password against database
    const validPassword = await dbUserData.passwordCheck(req.body.password);

    // if password is incorrect, send error message
    if (!validPassword) {
      throw new Error('Incorrect username or password. Please try again!');
    }

    // all good, log the user in
    // save user data in session
    req.session.save(() => {
      req.session.username = req.body.username;
      req.session.user_id = dbUserData.id;
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
