const router = require('express').Router();

const gamesDetailsRoutes = require('./game-details.js');
const allGamesRoutes = require('./all-games.js');
const createGameRoutes = require('./create-game.js');
const apiRoutes = require('./api');

// you are here: /games

router.use('/', allGamesRoutes);
router.use('/details', gamesDetailsRoutes);
router.use('/create-game', createGameRoutes);
router.use('/api', apiRoutes);

module.exports = router;
