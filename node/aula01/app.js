// const mod1 = require('./mod1');

// //se eu quieser importar somente uma chave 
// //const falaNome = require('./mod1').falaNome;

// //posso fazer atribuiçao fia desestruturaçao
// const { nome, sobrenome, falaNome} = require('./mod1');

// console.log(nome, sobrenome);
// console.log(falaNome());//executa a funçao falanome

const { Pessoa } = require('./mod1');
const mod1 = require('./mod1');
// //importando o axios
// const axios = require('axios');//a gente pode importar sem falar o caminho

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
// .then(response => console.log(response))
// .catch(e => console.log(e));

const p1 = new Pessoa('jão');
console.log(p1);
console.log(mod1);