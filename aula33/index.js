const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Pinto',
    idade: 43,
    endereco:{
        rua: 'r Miguel Maura',
        numero: 547
    }
};

//Atribuiçao via desestruturaçao
// const { nome, sobrenome, idade} = pessoa;
// console.log(nome, sobrenome, idade);
// const {nome: teste = '', sobrenome, idade} = pessoa;//atribuiçao para uma variavel com nome diferente da chave setada com o valor default vazio
// console.log(teste, sobrenome, idade);
// const { endereco: { rua, numero }, endereco } = pessoa;
// console.log(rua, numero, endereco);
const { nome, ...resto } = pessoa;
console.log(resto);