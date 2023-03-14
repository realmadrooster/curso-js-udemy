const express = require('express');//carrega o express
const route = express.Router();
const homeController =require('./src/controllers/homeController') //importando homeController
const contatoController = require('./src/controllers/contatoController');

//exemplo de midddleware
function meuMiddleware(req, res, next) {
    req.session = { nome: 'Luiz', sobrenome: 'Carlos'};
    console.log();
    console.log('passei no seu middleware');
    console.log();
    next();
}
//se nao tiver o next ele nao terminas as requisiçoes uma vez que nao chma a proxima

//rotas da home
route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res, next) {
    console.log();
    console.log('Ainda estou aqui...');
    console.log(`'ultimo middleware' Olha o que tem na req.session.nome ${req.session.nome}`)
});
route.post('/', homeController.trataPost);

//rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;//sobreescrevi o modulo