
const Contato = require('../models/ContatoModel');

exports.index = async(req, res) => {
    const contatos = await Contato.buscaContatos();
    //flash messages
    //executa depois
    //console.log(req.flash('error'), req.flash('sucess'), req.flash('info'));
    
    //executa primeiro
    // req.flash('info', 'Olá Mundo!');
    // req.flash('error', 'asdfasdf');
    // req.flash('sucess', 'Galooooooo');

    //console.log(req.session.usuario);
    // req.session.usuario = { nome: 'Luiz', Logado: true };//ficara salvo por 7 dias
    res.render('index', { contatos });
        //titulo: 'Este será o <span style="color:red;">título</span> da página',
        
    
};
