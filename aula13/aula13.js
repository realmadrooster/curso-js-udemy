//strings sao indexaveis, ou seja possuem indice sendo o primeiro indice == 0
//              01234567 
let umaString ="Um texto atleticano.";

console.log(umaString.charAt(3));//funçao que retorna o item de indice 3 da string. Obs: se inserirmos um indice fora do range da string a funçao retorna vazio

//funçao que concatena string
console.log(umaString.concat(' atleticano'));

//funçao que retorna o indice inicial de uma palavra dentro de uma string, obs: se nao encontrar retorna -1, o segundo parametro é o indice inicial de busca na string
console.log(umaString.indexOf('texto',0))

//funçao que faz a mesma coisa acima so que de traz pra frente
console.log(umaString.lastIndexOf('texto',7))

//funçao search faz a mesma coisa que indexof no entanto aceita espressoes regulares
console.log(umaString.search(/x/));//retorna o indice da letra x

//funçao que substitui um trecho da string por outro
console.log(umaString.replace('Um','1'));

//jeito de substituir um item de uma string em todas as posiçoes que este aparece nesta
console.log(umaString.replace(/t/g,'99'));

//funçao que retorna o tamanho da string
console.log(umaString.length);

//funçao que fatia uma string
console.log(umaString.slice(0,2));

//indice negativo funciona como se o indice inicial do trecho fosse o tamanho da string subtraido do indice negativo
console.log(umaString.slice(-3));

//inicio = length - 11 , termino = length -1
console.log(umaString.slice(-11,-1));

//funçao que faz a mesma coisa da acima com os parametro inicio() length - 11) e final (length -1) 
console.log(umaString.substring(umaString.length - 11, umaString.length -1));

//divide a string em pedaços delimitados pelo parametro passado a funçao
console.log(umaString.split(' ',3));//o segundo parametro indica o numero de vezes que queremos repetir o trecho subtraido nesse caso 3 vezes

//converte para maiuscula
console.log(umaString.toLocaleUpperCase());
//converte para minuscula
console.log(umaString.toLocaleLowerCase());
