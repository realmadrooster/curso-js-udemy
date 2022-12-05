//IEEE 754-2008
//existem imprecisoes no js em operaçoes com numeros contendo casas decimais
let num1 = 0.7;//number
let num2 = 0.1;//number

/*
num1 += num2;//0.8
num1 += num2;//0.9
num1 += num2;//1.0
num1 += num2;//1.1
num1 += num2;//1.2
num1 += num2;//1.3
num1 += num2;//1.4
num1 += num2;//1.5
num1 += num2;//1.6
num1 += num2;//1.7
num1 += num2;//1.8
num1 += num2;//1.9
num1 += num2;//2.0
*/
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
//linhas acima fazendo conversao de casas decimais utilizando matematica basica

//num1 = num1.toFixed(2);
//num1 = parseFloat(num1.toFixed(2));//resolve a questao se a variavel é inteira
//num1 = Number(num1.toFixed(2));//faz a mesma coisa da linha de codigo acima
console.log(num1);
console.log(Number.isInteger(num1));//retorna false devido a alguma questao interna do js

//console.log(num1.toString() + num2);//converte para string e nao salva

//num1 = num1.toString();//converte para string e salva

//console.log(num1.toString(2));//converte para binario

//console.log(num1.toFixed(2));//arredonda o numero para o numero de casas decimais passadas como parametro

//console.log(Number.isInteger(num1));//verifica se a variavel é um numero inteiro

//let temp = num1 * 'Olá';
//console.log(Number.isNaN(temp));

