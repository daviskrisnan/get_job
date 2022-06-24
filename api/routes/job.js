const jobRoute = require('express').Router();
const JobController = require('../controllers/JobController');
const { authentication } = require('../middlewares/auth');


jobRoute.get('/', authentication, JobController.getListJob);
jobRoute.get(':id', authentication, JobController.getDetailJob);

module.exports = jobRoute;