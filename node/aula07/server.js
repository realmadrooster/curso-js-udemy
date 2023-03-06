const express = require('express');
const app = express();
//CRIAMOS UMA API PARA FAZER ESSAS COISAS NO NOSSO SERVIDOR
//         CRIAR   LER   ATUALIZAR  APAGAR
//CRUD -> CREATE,  READ,  UPDATE,  DELETE
//         POST     GET     PUT    DELETE

//http://meusite.com/ <- GET -> entregue a pagina ROTA HOME /
//http://meusite.com/sobre <- GET -> navegador entregue a pagina ROTA /sobre
//http://meusite.com/contato <- GET -> navegador entregue a pagina ROTA /contato

// app.get('/', (req, res) => {
//     res.send('HELLO <b>WORLD</b>! GALOOOOO');
// });//posso mandar html

//enviando um formulario
//metodo get -> me entrega essa pagina ai
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do Cliente: <input type="text" name="nome">
    <button>Enviar Galoo Doido Campeão Mundial</button>
    </form>
    `);
});

//metodo post -> mandar dados no corpo da requisiçao
app.post('/', (req, res) => {
    res.send('Recebi o formulario');
});

// preciso fazer com que o servidor fique ouvindo em uma determinada porta e qualquer coisa que chegar ele respontde
//uma porta é um processo que esta sendo executado no servidor

//devemos utilizar portas que nao sao muito utilizadas para evitar erros que acontecem com portas ativas

//criando nova rota
app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.GALOOOOOOOOOOO');
})


app.listen(3000, () => {
    console.log('Acessar htttp://localhost:3000');
    console.log('Servidor executando na porta 3000');
});//escuta a porta 3000