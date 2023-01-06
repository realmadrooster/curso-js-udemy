//funcao sem paramentros que executa normalmente passando valores e somando-os
//a funçao definida com a palavra function tem uma variavel especial chamada arguments que sustenta todos os argumentos enviados
function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento; 
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);

function funcaoSoma(a, b) {
    b = b || 2; //se b nao for definida(undefined) b recebera 2 , caso contrario sera o valor enviado no arqumento da chamada da funçao
    console.log(a+b);
}
funcaoSoma(2);
//foma moderna de resolver o problema acima
function funcaoSoma2(a, b = 2) {
        console.log(a+b);
}
funcaoSoma2(2);

function funcaoSoma3(a, b = 2, c =4) {
    console.log(a + b + c);
}
funcaoSoma3(2, 10);//o valor de b sera 10 ou seja prevalece o valor do argumento passado na chamada da funçao
function funcaoSoma4(a, b = 2, c =4) {
    console.log(a + b + c);
}
funcaoSoma4(2, undefined, 10);//a funçao realiza a soma pulando o segundo argumento nesse caso b
function funcaoObj({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
funcaoObj({nome: 'luiz', sobrenome: 'carlos', idade: 43});//forma 1 de enviar o objeto
let obj = {nome: 'Alice', sobrenome: 'Castro', idade: 8};
funcaoObj(obj);//enviando o proprio objto como argumento

function funcaoArray([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcaoArray(['luiz carlos',' pinto junior', 43]);

function funcaoArray2([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
const Array1 = ['luiz carlos', 'pinto junior', 43];
funcaoArray2(Array1);

function conta(operador, acumulador, ...numeros) {//...rest operator 
    for (let numero of numeros) {

        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('*', 2, 20, 30, 40, 50);//rest operator pega todos os itens alem da definicao de parametros como se fossem um array

//a function expression abaixo faz a mesma coisa
const contaFuncExp = function(operador, acumulador, ...numeros) {//...rest operator 
    for (let numero of numeros) {

        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};
contaFuncExp('*', 2, 20, 30, 40, 50);

const contaArrowFunc = (...args) => {
    console.log(args);
};
contaArrowFunc('+', 1, 20, 30, 40, 50);//rest operator fazendo um processo semelhante a variavel arguments que nao é valida para arrow function