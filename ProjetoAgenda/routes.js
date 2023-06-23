const express = require('express');//carrega o express
const route = express.Router();

const homeController =require('./src/controllers/homeController'); //importando homeControlle
const loginController =require('./src/controllers/loginController');

//rotas da home
route.get('/', homeController.index);


//rotas de login
route.get('/login/index', loginController.index);


module.exports = route;//sobreescrevi o modulo