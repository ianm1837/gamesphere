const router = require('express').Router();

const commentsRoutes = require('./comments-routes.js');

router.use('/', commentsRoutes);

module.exports = router;
