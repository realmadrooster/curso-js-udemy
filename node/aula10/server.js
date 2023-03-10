const express = require('express');
const app = express();
const routes =require('./routes');
const path = require('path');
//com esse codigo consigo logar o req.body
app.use(express.urlencoded(
    { 
        extended: true
    }
  )
);//se nao fizer o codigo acima ele trata o body como qualquer coisa

app.set('views', path.resolve(__dirname, 'src', 'views'));//passando caminho absoluto -. preferir usar absoluto

app.set('view engine', 'ejs');//qual engine vou utilizar


app.use(routes);//fala para usar minhas rotas



app.listen(3000, () => {
    console.log('Acessar htttp://localhost:3000');
    console.log('Servidor executando na porta 3000');
});//escuta a porta 3000