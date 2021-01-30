const {Router} = require('express');

const routes = Router();

const loginController = require('./controller/pageLogin');
const registrationControll = require('./controller/registration');
const homeController = require('./controller/homePage');

routes.use('/login', loginController);
routes.use('/registration' , registrationControll);
routes.use('/', homeController);


module.exports = routes;
