//dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosEmDobro = numeros.map(function(valor, indice, array) {
//     return valor * 2;
// }); 

//mesma coisa do codigo acima so que com arrow function
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

//para cada elemento:
//retorne apenas uma string com o nome da pessoa
//remova apenas a chave "nome" do objeto
//adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

//retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(obj => obj.nome);

//remova apenas a chave "nome" do objeto
const idades = pessoas.map(function(obj) {
    // delete obj.nome;
    // return obj;
    //outra maneira e retornando um objeto novo
    return {idade: obj.idade};
});

//fazendo a mesma coisa com arrow function
const idades2 = pessoas.map(obj => ({idade: obj.idade}));

// //adicione uma chave id em cada objeto obs:o indice do array sera usado para criar o atributo id no objeto
// const comIds = pessoas.map(function(obj, indice) {
//     obj.id = indice;//o indice do array e definido como atributo id do objeto
//     return obj;
// })//essa expressao altera o objeto original

//adicione uma chave id em cada objeto obs:o indice do array sera usado para criar o atributo id no objeto ->obs: nesse codigo é feita uma copia do objeto original

const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj};//faz uma copia do objeto com rest operator(spread)
    newObj.id = indice;//atribui o indice do array ao novo atributo id na copia do objeto
    return newObj;
})
;
console.log(nomes);
console.log(idades);
console.log(idades2);
console.log(comIds);