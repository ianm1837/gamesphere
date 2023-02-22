const router = require('express').Router();

const createGameRoutes = require('./create-game');

// you are here: /games/api

router.use('/create-game', createGameRoutes);

module.exports = router;
