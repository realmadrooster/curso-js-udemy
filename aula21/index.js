/*
Operadores de comparaçao
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade(valor)*******
=== igualdade estrita(valor e tipo)
!= diferente(valor)********
!== diferente estrito(valor e tipo)
*/ 
const num1 = 10;
const num2 = '10';
//const comp = num1 == num2;//retorna true , procedimento que nao queremos
const comp = num1 === num2;//tem como resultado false
console.log(comp) //