// you are here: /games/details

const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('games-details');
});

module.exports = router;
