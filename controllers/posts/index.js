const router = require('express').Router();
const postDetailsRoutes = require('./post-details.js');
const postTopicsRoutes = require('./post-topics.js');
const apiRoutes = require('./api');

// you are here: /posts
router.use('/details', postDetailsRoutes);
router.use('/topics', postTopicsRoutes);
router.use('/api', apiRoutes);

module.exports = router;
