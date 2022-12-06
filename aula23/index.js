/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"
FALSY
*false
0
strings vazias
null / undefined
NaN
*/

//console.log('Luiz' && 'Maria');//tudo verdadeiro retorna o ultimo valor checado
//console.log('Luiz' && 0 && 'Maria');//retorna o valor false
/*
function falaOi(){
    return 'Oi';
}
//let vaiExecutar = undefined;
//console.log(vaiExecutar && falaOi());//retorna o valor undefined

let vaiExecutar = 'Joazinho';//string nao vazia 

console.log(vaiExecutar && falaOi());//executa a funçao falaOi
*/
/*
console.log(0 || false || null || 'Luiz Carlos' || true);//vai retornar luiz carlos porque é o primeiro valor verdadeiro
*/
/*
const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);//retorna o primeiro valor true nesse caso preto
*/
const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || c || d || e);//todas sao false portanto retorna a ultima nesse caso NaN