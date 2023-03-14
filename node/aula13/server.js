const express = require('express');
const app = express();
const routes =require('./routes');
const path = require('path');
//com esse codigo consigo logar o req.body

//chamando o middleware global
const { middlewareGlobal, outroMiddleware } = require('./src/middlewares/middleware');

app.use(express.urlencoded(
    { extended: true }));//se nao fizer o codigo acima ele trata o body como qualquer coisa

//app.use(express.static('./public'));//enviando conteudo estatico com caminho relativo

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));//passando caminho absoluto -. preferir usar absoluto

app.set('view engine', 'ejs');//qual engine vou utilizar

//fazendo com que  meuMiddleware passe por todas as requisiçoes e rotas
app.use(middlewareGlobal); 
app.use(outroMiddleware);


app.use(routes);//fala para usar minhas rotas



app.listen(3000, () => {
    console.log('Acessar htttp://localhost:3000');
    console.log('Servidor executando na porta 3000');
});//escuta a porta 3000