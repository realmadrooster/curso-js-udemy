//fazendo com que os dados de usuario e senha do banco de dados sejam ocultados
require('dotenv').config();

const express = require('express');
const app = express();

//conectadndo ao banco de dados mongo db
//retirar o sinal de maior e menor de usruario
//e senha
//inserir BASEDEDADOS antes de ?

const mongoose = require('mongoose');
// mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => console.log('Agora que a conexao ocorreu'));
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    // console.log('Conectei a base de dados.');
    app.emit('pronto');//fazendo a conexao com a base de dados ocorrer primeiro
})
.catch(e => console.log(e));
//{ useNewUrlParser: true, useUnifiedTopology: true } para nao aparecer os avisos
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

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar htttp://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });//escuta a porta 3000
})
//quando iniciar o servidor a conexao so vai ocorrer quando o app emitir o sinal de pronto
//nenhum cliente acessa ate a base de dados inicializar