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

//modelar base de dados

//criando sessoes
const session = require('express-session');//identificar o navegador de um cliente
const MongoStore = require('connect-mongo');//fala que as sessoes vao ser salvas dentro da base de dados
const flash = require('connect-flash');//mensagens auto destrutivas



const routes =require('./routes');//rotas da nossa sessao ex:/home /contato
const path = require('path');//trabalhar com caminhos
//com esse codigo consigo logar o req.body

const helmet = require('helmet');//recomendaçao do prprpio pessoal do express
const csrf = require('csurf');//csrf token que criamos para nossos formularios

//chamando o middleware global
const { middlewareGlobal, outroMiddleware, checkCsrfError,csrfMiddleware } = require('./src/middlewares/middleware');//middlewares sao funçoes que sao executadas na rota

app.use(helmet());

app.use(express.urlencoded(
    { extended: true }));//se nao fizer o codigo acima ele trata o body como qualquer coisa
    //fala qu3e podemos postar usuarios para dentro da nossa aplicaçao

//app.use(express.static('./public'));//enviando conteudo estatico com caminho relativo

app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'public')));//todos os arquivos extaticos da nossa sessao que podem ser acessados diretamente ex imagens css js

//configuranaod a sessao
const sessionOptions = session({
    secret:'Galao campeão mundial',
    store:  MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 *60 * 24 * 7,//quanto tempo a sessao vai durar em ms nesse caso 7 dias
        httpOnly: true
    }
});

//falar para usar ela
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));//passando caminho absoluto -. preferir usar absoluto
//arquivos que renderizamos na tela

app.set('view engine', 'ejs');//qual engine vou utilizar
//engine que estamos utilizando para renderizar o html nesse caso ejs


app.use(csrf());//configurando csrf token

//fazendo com que  meuMiddleware passe por todas as requisiçoes e rotas
//configurando os middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError); 
app.use(csrfMiddleware);
app.use(outroMiddleware);


app.use(routes);//fala para usar minhas rotas//chamando as rotas

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar htttp://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
    //escuta a porta 3000
})
//mandando a nossa aplicaçao escutar coisas
//quando iniciar o servidor a conexao so vai ocorrer quando o app emitir o sinal de pronto
//nenhum cliente acessa ate a base de dados inicializar