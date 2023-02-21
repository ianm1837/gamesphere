const router = require('express').Router();

const postsRoutes = require('./posts-routes.js');

router.use('/', postsRoutes);

module.exports = router;
