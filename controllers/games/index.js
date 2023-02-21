const router = require('express').Router();

const gamesDetailsRoutes = require('./game-details.js');
const allGamesRoutes = require('./all-games.js');
const apiRoutes = require('./api');

// you are here: /games

router.use('/', allGamesRoutes);
router.use('/details', gamesDetailsRoutes);
router.use('/api', apiRoutes);

module.exports = router;
