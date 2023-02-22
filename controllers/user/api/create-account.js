const router = require('express').Router();
const { User } = require('../../../models');

// you are here: /user/api/create-account
router.post('/', async (req, res) => {
  try {
    const dbFindUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    console.log('Find user data: ' + JSON.stringify(dbFindUserData));

    // If username does not exist, create new user
    if (!dbFindUserData) {
      if (req.body.username.length > 7 && req.body.password.length > 7) {
        try {
          const dbNewUserData = await User.create({
            username: req.body.username,
            password: req.body.password,
            twoFactor: 'placeholder',
          });

          req.session.save(() => {
            req.session.username = req.body.username;
            req.session.user_id = dbNewUserData.dataValues.id;
            req.session.loggedIn = true;

            res.status(200).redirect('/');
          });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      } else {
        res.status(400).json({
          message:
            'Username and password must be at least 8 characters long. Please try again!',
        });
      }
    } else {
      res.status(400).json({
        message: 'Username already exists. Please try again!',
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
