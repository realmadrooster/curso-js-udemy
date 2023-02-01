// 705.484.450-52  070.987.720-03
/*
7x 0x 5x 4x 8x 4x 4x 5x 0x 
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0  = 237 //

11 - (237 % 11) = 5 (primeiro digito)//se o resultado da operaçao for maior que 9 o digito considerado sera o 0


7x 0x 5x 4x 8x 4x 4x 5x 0x 
11 10  9  8  7  6  5  4  3
70 0  45  32 56 24 20 0  10 = 284

//a contagem regressiva começa de 11 devido a insercao do primeiro digito encontrado na operaçao anterior


11 - (284 % 11) = 2 (primeiro digito)//se essa operaçao for maior que 9 considera-se 0

705.484.450-52 === 705.484.450-52 = true cpf valido
*/

let cpf = '705.484.450-52';//tem que ser uma string senao podemos ter problemas com cpfs que começam com 0
let cpfLimpo = cpf.replace(/\D+/g,'');//expressao regular que remove tudo que nao for digito 
let cpfArray = Array.from(cpfLimpo);//converte a string em um array
console.log(cpfArray.reduce((ac,val) => ac + Number(val), 0));