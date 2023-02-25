const router = require('express').Router();
const { Games, User, Posts } = require('../../models');

// you are here: /games/details/:id
// find the game by id and include the user data
router.get('/:id', async (req, res) => {
  // if the user is not logged in, redirect to the login page
  if (!req.session.loggedIn) {
    res.redirect('/user/login');
  }

  // store the session variables
  let loginStatus = req.session.loggedIn;
  let loggedInUser = req.session.username;

  // try to find the game by the id provided in the url
  try {
    const dbGameData = await Games.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
      ],
    });

    // find all posts for the game and include the user data
    const dbPostsData = await Posts.findAll({
      where: {
        game_id: req.params.id,
      },
      include: [
        {
          model: User,
        },
      ],
    });

    // remove sequelize data from the objects
    const game = dbGameData.get({ plain: true });
    const posts = dbPostsData.map((post) => post.get({ plain: true }));

    // render the page with the data
    res.render('games-details', {
      loggedInUser,
      loginStatus,
      game,
      posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
