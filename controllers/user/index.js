const router = require('express').Router();
const createAccountRoutes = require('./create-account');
const loginRoutes = require('./login');
const dashboardRoutes = require('./dashboard');
const preferencesRoutes = require('./preferences');
const apiRoutes = require('./api');

// you are here: /user
router.use('/create-account', createAccountRoutes);
router.use('/login', loginRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/preferences', preferencesRoutes);
router.use('/api', apiRoutes);

module.exports = router;
