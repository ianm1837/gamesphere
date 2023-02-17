const router = require('express').Router();

const commentsRoutes = require('./comments-routes');

router.use('/', commentsRoutes);

module.exports = router;
