// module.exports = (req, res, next) => {
//     //console.log();
//     //console.log('Passei no middleware global.');

//     if(req.body.cliente) {
//         req.body.cliente = req.body.cliente.replace('Carlos', 'Não use Carlos');//interceptei o valor alterei e ainda falei para o cliente nao usar
//         console.log();
//         console.log(`Vi que voce postou ${req.body.cliente}`);
//         console.log();
//     }

//     //console.log();
//     next();//sempre lembrar de chamar
// };

//outra forma de chamar o middleware global
exports.middlewareGlobal = (req, res, next) => {
    //injetando conteudo em todas as rotas
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    next();//sempre lembrar de chamar
};

exports.outroMiddleware = (req, res, next) => {
    console.log('Sou seu outro middleware');
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if(err) {
        return res.render('404');
    }
    next();
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};
