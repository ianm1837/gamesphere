const router = require('express').Router();
const { Post, User, Games} = require('../models');

router.get('/', async (req, res) => {
  try {
    const dbDashboardData = await Games.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    let games = dbDashboardData.map((games) => ({
      title: games.title,
      id: games.id,
      content: games.description,
      timestamp: games.timestamp,
      user_id: games.user_id,
      username: games.user.username,
    }));

    console.log('list of user games: ' + JSON.stringify(games));
    res.render('home', {
      games,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/test', async (req, res) => {
  try {
    const dbDashboardData = await Post.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    let games = dbDashboardData.map((games) => ({
      title: games.title,
      content: games.content,
      timestamp: games.timestamp,
      user_id: games.user_id,
      username: games.user.username,
    }));

    res.json(games);
    // let games = dbDashboardData.map((games) => ({
    //   title: games.title,
    //   content: games.content,
    //   timestamp: games.timestamp,
    //   user_id: games.user_id,
    // }));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
