const router = require('express').Router();

const userLoginRoutes = require('./login-routes');
const userLogoutRoutes = require('./logout-routes');
const userPreferencesRoutes = require('./preferences-routes');
const userCreateAccountRoutes = require('./create-account-routes');
const userDashboardRoutes = require('./dashboard-routes');

router.use('/login', userLoginRoutes);
router.use('/logout', userLogoutRoutes);
router.use('/preferences', userPreferencesRoutes);
router.use('/create-account', userCreateAccountRoutes);
router.use('/dahsboard', userDashboardRoutes);

module.exports = router;

//login

//logout

//get user data?
//  What games are you following?
//  Most recent comments?


