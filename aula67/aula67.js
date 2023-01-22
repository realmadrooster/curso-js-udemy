// some todos os numeros(reduce)
//retorne um array com os valores pares(filter)
//retorne um array com o dobro dos valores (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// some todos os numeros(reduce)
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor;
    return acumulador;
},0);//acumulador inicia com 0
console.log(total);//valor da ultima iteraçao de acumulador

//retorne um array com os valores pares(filter)
//essa operaçao nao  deve ser feita com reduce e sim com filter
const pares = numeros.reduce(function(acumulador, valor, indice, array) {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
},[]);//acumulador é um array

//retorne um array com o dobro dos valores (map), nao deve ser feito com reduce
const dobro = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador.push(valor * 2);
    return acumulador;
},[]);//acumulador é um array

const somaPares = numeros.reduce(function(acumulador, valor, indice, array) {
    if(valor % 2 === 0) {
        acumulador += valor;
    }

    return acumulador;
},0);//tenho que iniciar o acumulador com 0 caso contrario ele soma o primeiro elemento mesmo que ele seja impar

console.log(total);//valor da ultima iteraçao de acumulador
console.log(pares);
console.log(dobro);
console.log(somaPares);

//retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 47},
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
//nesse caso na inicializaçao do metodo reduce o acummulador recebe o primeiro item do array e o valor o segundo assim sucessivamente
console.log(maisVelha);