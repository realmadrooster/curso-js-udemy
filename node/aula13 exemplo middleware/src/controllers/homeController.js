exports.paginaInicial = (req, res, next) => {
    console.log('Respondendo ao cliente');
    res.render('index');
    console.log(`'paginaInicial' Olha o que tem na req.session.nome ${req.session.nome}`)
    next();
};
//next para chamar a funçao apos o middleware em routes.js

exports.trataPost = (req, res, next) => {
    res.send('Ei, sou sua nova rota de de POST');
};