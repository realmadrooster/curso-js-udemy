//nao podemos criar constantes com palavras reservadas
//constantes precisam ter nomes significativos
//nao pode começar o nome de uma constante com numero
//nao podem conter espaços ou traços
//utilizamos camelcase
//case sensitive
//deve ser inicializada na sua criaçao
//nao podemos modificar o valor de uma constante
//nao utilizar var, utilize const
const nome = 'João';
console.log(nome);
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
console.log(resultado);
console.log(resultadoDuplicado)
console.log(resultadoTriplicado);
//para saber o tipo de uma variavel
console.log(typeof(primeiroNumero));

console.log(primeiroNumero + segundoNumero);