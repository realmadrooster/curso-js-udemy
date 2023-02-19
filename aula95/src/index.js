// import { nome, sobrenome, idade, soma, Pessoa as OutraCoisa} from './modulo1';

// //const nome = 'Joao';//variavel ira colidier por teremm mesmo nome importando atribuindo um apelido resolve esse problema

// const p1 = new OutraCoisa('Alice', 'Castro');
// console.log(p1);
// console.log(nome, sobrenome, idade);
// console.log(soma(9, 4));

//posso importar todo o modulo em uma linha de codigo

// import * as MeuModulo from './modulo1';
// console.log(MeuModulo);

//posso importar um default por modulo
// import qualquerNome from './modulo1'

// console.log(qualquerNome(2, 3));


// import {multiplica, nome, sobrenome, idade, soma} from './modulo1';
// console.log(multiplica(4, 7));

// console.log(nome, sobrenome, idade, soma(9, 4));

// const p1 = new Pessoa(nome, sobrenome);
// console.log(p1);

import Pessoa, {nome, sobrenome} from './modulo1';

const p1 = new Pessoa(nome, sobrenome);
console.log(p1);