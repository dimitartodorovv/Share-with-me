const {Router} = require('express');

const routes = Router();

const loginController = require('./controller/pageLoginAndReg');

routes.use('/', loginController);


module.exports = routes;
