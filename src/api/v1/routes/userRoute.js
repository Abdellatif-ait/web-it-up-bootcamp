const route = require('express').Router();
const { getAllHandler, getOneHandler } = require('../controllers/userController');

route.get('/', getAllHandler);

route.get('/:id', getOneHandler);

module.exports = route;