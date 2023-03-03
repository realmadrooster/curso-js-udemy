const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

//comentar para testar o processo de leitura
// const pessoas = [
    
//     { nome: 'João' },
//     { nome: 'Maria' },
//     { nome: 'Eduarda' },
//     { nome: 'Luiza' }
    
// ];

// const json = JSON.stringify(pessoas, '', 2);

// escreve(caminhoArquivo, json);
async function leArquivo(caminho){
    const dados = await ler(caminho);
    //return dados;
    //posso retornr uma funçao que renderiza dados
    renderizaDados(dados);
}

function renderizaDados(dados) {
    // console.log(dados);//loga os dados
    //converte de json para objeto novamente
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val));//posso pegar o val.nome
        
}

leArquivo(caminhoArquivo);

//foi utilizado a funçao r3nderiza para substityuir o codigo abaixo
// const dadosArquivo = leArquivo(caminho).then(dados => console.log(dados));

     