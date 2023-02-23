// you are here: /games/details
const { Games, User, Posts } = require('../../models');

const router = require('express').Router();

router.get('/:id', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
  }

  let loginStatus = req.session.loggedIn;
  let loggedInUser = req.session.username;

  try {
    const dbGameData = await Games.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
      ],
    });

    const game = dbGameData.get({ plain: true });

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

    const posts = dbPostsData.map((post) => post.get({ plain: true }));

    console.log('this is game: ' + JSON.stringify(dbGameData));

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
