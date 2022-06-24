const route = require('express').Router();

route.get('/', (req, res) => {
    res.json({
        message: 'Homepage'
    })
})

const userRoutes = require('./user');
route.use('/users', userRoutes);

const jobRoutes = require('./job');
route.use('/jobs', jobRoutes);

module.exports = route;