const router = require('express').Router();
const { Games, User } = require('../../models');

// you are here: /games
router.get('/', async (req, res) => {
  let loginStatus = req.session.loggedIn;
  let loggedInUser = req.session.username;

  // find all games and include the user data
  try {
    const dbGamesData = await Games.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    // map the data to a new object
    const games = dbGamesData.map((game) => ({
      title: game.title,
      id: game.id,
      description: game.description,
      game_image: game.game_image,
      user: game.user.username,
      timestamp: game.timestamp,
      loginStatus: loginStatus,
    }));

    // render the page with the data
    res.render('all-games', {
      games,
      loginStatus,
      loggedInUser,
    });
  } catch {
    res.status(500).json(err);
  }
});

module.exports = router;
