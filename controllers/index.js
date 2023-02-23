const router = require('express').Router();

const homeRoutes = require('./homepage-routes');
const postsRoutes = require('./posts');
const userRoutes = require('./user');
const gamesRoutes = require('./games');

router.get('/', (req, res) => {
  res.redirect('/games');
});

router.use('/user', userRoutes);
router.use('/posts', postsRoutes);
router.use('/games', gamesRoutes);

module.exports = router;
