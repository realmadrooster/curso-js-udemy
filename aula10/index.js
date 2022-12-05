/**
 * Aritmeticos
 * + Adiçao / concatenaçao
 * * - / * **
 * % resto da divisao
 * ordem de precedencia dos operadores
 * ()
 * **
 * * / %
 * + - 
 */
/* Operadores de incremento ++
* decremente --
*/
let contador = 1;
contador++; //exemplo de uso do operador de incremento
console.log(contador++);//mostra o valor e depois incrementa
console.log(++contador);//incrementa e depois mostra o valor
contador = contador + 3;//varia de 3 em 3
contador += 3;//faz a mesma coisa da linha acima
//posso fazer a mesma coisa para qualquer operador aritmetico
contador *= 2;
contador = contador * 2;//faz a mesma coisa da linha acima
//fazendo com potenciaçao
contador **= 10;
contador = contador ** 10;//mesma coisa da linha acima
const numTeste = parseInt('13.2');//converte para inteiro
const numTeste2 = parseFloat('13.3');//converte para ponto flutuante
const numTeste3 = Number('13.4');//faz a mesma coisa que as duas funçoes acima
console.log(numTeste);
console.log(numTeste2);
console.log(numTeste3);

