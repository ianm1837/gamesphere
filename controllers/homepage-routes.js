const router = require('express').Router();
const { Posts, User, Games } = require('../models');

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

    res.render('homepage', {
      games,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
