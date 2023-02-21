const router = require('express').Router();


// you are here: /games/api/create-game
router.get('/', (req, res) => {
  res.json({ message: "create game api"})
});

module.exports = router;
