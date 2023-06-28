const express = require('express');//carrega o express
const route = express.Router();

const homeController =require('./src/controllers/homeController'); //importando homeControlle
const loginController =require('./src/controllers/loginController');
const contatoController =require('./src/controllers/contatoController');

const { loginRequired } = require('./src/middlewares/middleware');

//rotas da home
route.get('/', homeController.index);


//rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

// rotas de contato
route.get('/contato/index', loginRequired, contatoController.index);
route.post('/contato/register', loginRequired, contatoController.register);
route.get('/contato/index/:id', loginRequired, contatoController.editIndex);


module.exports = route;//sobreescrevi o modulo