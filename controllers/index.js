const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const commentRoutes = require('./comments');
const postsRoutes = require('./posts');
const userRoutes = require('./user');
// added by chris ridder for 2fa - 20230211124837
// >
const 2faRoutes = require("./api/2fa");
router.use("/api/2fa", 2faRoutes);
// <
// added by chris ridder for 2fa - 20230211124837


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postsRoutes);
router.use('/user', userRoutes);

module.exports = router;
