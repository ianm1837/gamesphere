const router = require('express').Router();

const homeRoutes = require('./homepage-routes');
const postsRoutes = require('./posts');
const userRoutes = require('./user');

router.use('/', homeRoutes);
router.use('/user', userRoutes);
router.use('/posts', postsRoutes);

module.exports = router;
