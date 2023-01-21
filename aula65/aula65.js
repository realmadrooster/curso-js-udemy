//filter -> sempre retorna um array com a mesma quantidade de elementos ou menos

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor, indice, array) {//posso mandar so o valor

// function callbackFilter(valor) {
//    return valor > 10;
//     // if (valor > 10) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
// } //posso fazer a mesma coisa utilizando funçao anonima

// const numeroFiltrados = numeros.filter(callbackFilter);

// const numeroFiltrados = numeros.filter(function(valor) {
//     return valor > 10;
// });

//posso fazer tambem utilizando arrow function

// const numeroFiltrados = numeros.filter((valor) => {
//     return valor > 10;
// });

//outra forma de escrever a arrow removendo os parentes do parametro porque e so 1 e removendo as chaves porque so tenho uma expressao , tambem posso remover o return
const numeroFiltrados = numeros.filter(valor => valor > 10);

//pegando os demais parametros
// const numeroFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice, array);
//     return valor > 10;
// });
console.log(numeroFiltrados);

//retorne as pessoas que tem o nome com 5 letras ou mais
//retorne as pessoas com mais de 50 anos
//retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

//filtra as pessoas que tem o nome com 5 letras ou mais
// const pessoasComNomeGrande = pessoas.filter(function(obj) {
//     return obj.nome.length >= 5;
// });
//forma reduzida com arrow function
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);

//retorna as pessoas com mais de 50 anos
const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);

//retorne as pessoas cujo nome termina com a
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));//tolowercase para garantir que o nome esteja todo em minusculas para uma so checaggem e endswith pega o elemento que tem a ultima letra especificada como argumento da funçao

console.log(pessoasComNomeGrande);
console.log(pessoasComMaisDeCinquentaAnos);
console.log(nomeTerminaComA);