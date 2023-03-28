const route= require('express').Router();

const {loginHandler, registerHandler} = require('../controllers/authController');

route.post('/login', loginHandler);
route.post('/register', registerHandler);

module.exports = route;