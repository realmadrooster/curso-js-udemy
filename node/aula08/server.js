const express = require('express');
const app = express();

//com esse codigo consigo logar o req.body
app.use(express.urlencoded(
    { 
        extended: true
    }
  )
);//se nao fizer o codigo acima ele trata o body como qualquer coisa

//http://facebook.com
// /profiles/12345
// ?campanha?googleads 
// &nome_campanha=seila
                                       //query string  2 parametros                               

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do Cliente: <input type="text" name="nome">
    Outro campo: <input type="text" name="aquioutrocampo">
    <button>Enviar Galoo Doido Campeão Mundial</button>
    </form>
    `);
});


app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {//:/idUsuarios permite que parametros sejam passados , o ponto de interrogaçao de pois do paramentro idUsuarios faz que com ele seja opcionaçç ou seja podemos acessar /testes sem ele
    //console.log(req.params);
    // console.log(req.params.idUsuarios);//posso exibir o parametro no browser
    
    //res.send('OI');
    //res.send(req.params.idUsuarios);

    
    console.log(req.params);//posso exibir o parametro no browser como um json -> partes que vem na rota da url
    // /profile/3

    console.log(req.query)//posso logar a query que enviei no browser
    //res.send(req.params);//envia os parametros
    //query->
    // /profiles/?chave1&chave2=valor2&chave3=valor3
    res.send(req.query.facebookprofile);//exibe no browser o facebook profile
});

//metodo post -> mandar dados no corpo da requisiçao
app.post('/', (req, res) => {
    console.log(req.body);//vem o que  a gente receber no corppo da requisiçao
    res.send(`O que você me enviou foi: ${req.body.nome}`);
});


app.listen(3000, () => {
    console.log('Acessar htttp://localhost:3000');
    console.log('Servidor executando na porta 3000');
});//escuta a porta 3000