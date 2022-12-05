/*
Primitivos(imutáveis) - string, number, boolean, undefined, null(bigint, symbol)

Referencia(mutavel) - Array, object, function
*/

/*
let a = [1, 2, 3];
let b = a; //a e b apontam para o mesmo local na memoria
let c = [...a]; 
console.log(a,b,c);

a.push(4);//altero somente a afeta b
console.log(a,b,c);

b.pop();//altero somente b afeto a
console.log(a, b , c);
*/
/*
let nome = 'Luiz';
nome[0] = 'R';//nao altera a string que é imutavel
console.log(nome[0], nome);
*/
/*
let a = 'A';
let b = a; //copia

console.log(a,b);

a = 'outra coisa';
console.log(a,b);
*/

const a = { 
    nome:'Luiz',
    sobrenome:'Pinto'
};
//const b = a;//a e b apontam para os mesmos locais na memoria

const b = {...a};//spread que permite que um comportamento de nao apontarem para o mesmo local na memoria
a.nome = 'João';
console.log(b);