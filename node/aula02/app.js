// // const multiplicacao = require('./mod');

// // console.log(multiplicacao(2, 4));
// // //outra forma de executar
// const Cachorro= require('./B/C/D/mod');

// const cachorrinho = new Cachorro('dog');
// cachorrinho.latir();

// const Cachorro = require('./Z/mod2');

// const c1 = new Cachorro('Dog');
// c1.latir();

// //caminho absoluto
// console.log(__filename);//nome do arquivo atual
// console.log(__dirname);//nome da pasta atual

const path = require('path');
console.log(path.resolve(__dirname));//__dirname mando o caminho da pasta que estou atualmente

console.log(path.resolve(__dirname, '..', '..'));//__dirname mando o caminho da pasta que estou atualmente, voltando duas pastas

console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));//__dirname mando o caminho da pasta que estou atualmente, voltando duas pastas -> acessa a pasta arquivo/imagens

const Cachorro = require('./Z/mod2.js');//importando com extensao js nao muda nada

const c1 = new Cachorro('Dog');
c1.latir();