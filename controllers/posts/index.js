const router = require('express').Router();

const postDetailsRoutes = require('./post-details-routes.js');
const postTopicsRoutes = require('./post-topics-routes.js');


router.use('/details', postDetailsRoutes);
router.use('/topics', postTopicsRoutes);

module.exports = router;
