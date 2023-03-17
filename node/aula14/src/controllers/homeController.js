//const HomeModel = require('../models/HomeModel');

//criando dados na base
HomeModel.create({
    titulo: 'GALO CAMPEAO MUNDIAL 2023',
    descricao: 'Quero ganhar a segunda.'
}).then(dados => console.log(dados))
.catch(e => console.log(e));

//busca os dados na base
/*HomeModel.find({   
//}).then(dados => console.log(dados))
//.catch(e => console.log(e));
*/

exports.paginaInicial = (req, res) => {
    res.render('index');
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    //res.send('Ei, sou sua nova rota de de POST');
};