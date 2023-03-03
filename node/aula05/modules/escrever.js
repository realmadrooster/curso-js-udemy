// const fs = require('fs').promises;
// const path = require('path');
// const caminhoArquivo = path.resolve(__dirname,'..','teste.txt');

// fs.writeFile(caminhoArquivo, ' Galo Forte Vingador\n',{ flag: 'w', encoding: 'utf8'});//flag w apaga tudo que estiver no arquivo caso ele ja exista, se substituir por flag: 'a'  ele vai empilhando o testo, encoding nao é necessario enviar, \n no texto a ser escrtio  qubra linha

//escrevendo arquivos json -> json aceita null e numeros sem aspas duplas no arquivo

// const fs = require('fs').promises;
// const path = require('path');
// const caminhoArquivo = path.resolve(__dirname,'..','teste.json');

// const pessoas = [
    
//     { nome: 'João' },
//     { nome: 'Maria' },
//     { nome: 'Eduarda' },
//     { nome: 'Luiza' }

// ];

// const json = JSON.stringify(pessoas, '' , 2);//2 espaços

// fs.writeFile(caminhoArquivo, json, { flag: 'w'});

//fazendo com modulos e funçoes

const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' });
};