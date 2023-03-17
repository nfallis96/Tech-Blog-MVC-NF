const apiRoutes = require('./api');
const router = require('express').Router();
const dashboardRoutes = require('./dashboard-routes.js');
const homepageRoutes = require('./homepage-routes.js');

router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homepageRoutes);

module.exports = router;