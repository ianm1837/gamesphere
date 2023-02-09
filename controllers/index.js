const router = require('express').Router();

// const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
// const commentRoutes = require('./comments');
// const postsRoutes = require('./posts');
// const userRoutes = require('./user');

router.use('/', homeRoutes);
// router.use('/api', apiRoutes);
// router.use('/comments', commentRoutes);
// router.use('/posts', postsRoutes);
// router.use('/user', userRoutes);

module.exports = router;
