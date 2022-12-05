/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu IMC é de 25.9259. Luiz Otávio nasceu em 1980
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc = peso /(altura * altura);
let anoNascimento = 2022 - idade;

console.log(nome,sobrenome,'tem',idade,'anos,pesa',peso,'kg tem',altura,'m de altura e seu IMC é de ',imc,'.',nome,'nasceu em ',anoNascimento);

//template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${altura}m de altura e seu IMC é de ${imc}.${nome} nasceu em ${anoNascimento}`);

