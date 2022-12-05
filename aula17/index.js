/*
function saudacao(nome){
       return `Bom Dia ${nome}!`;
}//sem ponto e virgula

const variavel = saudacao('Luiz')
console.log(variavel);
*/

/*
function soma(x = 1,y = 1){
    const resultado = x + y;
    return resultado;
}
const resultado = soma(2,2);//variavel de mesmo nome porem em um escopo diferente
console.log(resultado);

const resultado2 = soma();//assume os valores atribuidos no corpo da funçao
console.log(resultado2);
*/

/*
const raiz = function (n){
    return n ** 0.5;
};//quando atribuo uma funçao a uma varivel preciso colocar ponto e virgula no final
console.log(raiz(9));
console.log(raiz(81));
*/

//Modo de declarar funçao arrow function
const raiz = n => n ** 0.5;//so um parametro nao precisa de parenteses 
console.log(raiz(9));
console.log(raiz(81));