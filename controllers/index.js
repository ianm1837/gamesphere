const router = require('express').Router();
const homeRoutes = require('./homepage-routes');
const postsRoutes = require('./posts');
const userRoutes = require('./user');
const gamesRoutes = require('./games');

// you are here: /
router.use('/user', userRoutes);
router.use('/posts', postsRoutes);
router.use('/games', gamesRoutes);

// redirect all calls for / to /games making /games the effective homepage
router.get('/', (req, res) => {
  res.redirect('/games');
});

module.exports = router;
