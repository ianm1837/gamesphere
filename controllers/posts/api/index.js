const router = require('express').Router();
const createCommentRoutes = require('./create-comment');
const createPostRoutes = require('./create-post');

// you are here: /posts/api
router.use('/create-comment', createCommentRoutes);
router.use('/create-post', createPostRoutes);

module.exports = router;
