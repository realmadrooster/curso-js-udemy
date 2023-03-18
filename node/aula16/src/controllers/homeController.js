
exports.paginaInicial = (req, res) => {
    //flash messages
    //executa depois
    //console.log(req.flash('error'), req.flash('sucess'), req.flash('info'));
    
    //executa primeiro
    // req.flash('info', 'Olá Mundo!');
    // req.flash('error', 'asdfasdf');
    // req.flash('sucess', 'Galooooooo');

    //console.log(req.session.usuario);
    // req.session.usuario = { nome: 'Luiz', Logado: true };//ficara salvo por 7 dias
    res.render('index', {
        //titulo: 'Este será o <span style="color:red;">título</span> da página',
        titulo: 'Este será o título da página',
        numeros: [0, 1, 2, 3, 4 , 5, 6, 7, 8, 9]
    });
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    //res.send('Ei, sou sua nova rota de de POST');
    return;
};