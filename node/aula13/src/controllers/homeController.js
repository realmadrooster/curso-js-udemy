exports.paginaInicial = (req, res) => {
    res.render('index');
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    //res.send('Ei, sou sua nova rota de de POST');
};