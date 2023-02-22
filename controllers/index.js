const router = require('express').Router();

const homeRoutes = require('./homepage-routes');
const postsRoutes = require('./posts');
const userRoutes = require('./user');
const gamesRoutes = require('./games');

router.use('/', homeRoutes);
router.use('/user', userRoutes);
router.use('/posts', postsRoutes);
router.use('/games', gamesRoutes)

module.exports = router;
