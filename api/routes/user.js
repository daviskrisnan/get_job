const userRoute = require('express').Router();
const UserController = require('../controllers/UserController');
const { authentication } = require('../middlewares/auth');


userRoute.get('/', UserController.getAllUser);
userRoute.post('/register', UserController.register);
userRoute.post('/login', UserController.login);
userRoute.get('/detail', authentication, UserController.getDetailUser);

module.exports = userRoute;