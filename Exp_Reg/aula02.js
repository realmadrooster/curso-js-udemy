const { texto } = require('./base');
const regExp1 = /joão/gi;

//( ...( ... ) ) ( ... ) ( ... ) $1 $2 $3 $4 // seriam assim a disposiçao de 3 grupos e um grupo dentro de outro(nesse caso sera $2) nas expressoes regulares

console.log(texto.match(regExp1));//localiza a(s) ocorrencia(s) dentro do texto

//console.log(texto.replace('joão', 'Tadano'));//troca exatamente a primeira string pela segunda

//console.log(texto.replace(/joão/gi, 'Tadano'));//troca exatamente a primeira string pela segunda /gi todas as ocorrencias sem case sensitive

//console.log(texto.replace(/(joão|Maria)/gi, '"$1"'));//todas as ocorrencias de joao e maria ficam entre aspas duplas(o 1 representa o que esta dentro dos parenteses)

//console.log(texto.replace(/(joão|Maria)/gi, '<b>$1</b>'));//todas as ocorrencias de joao e maria ficam entre as tags html <b></b>(o 1 representa o que esta dentro dos parenteses)

// console.log(texto.replace(/(joão|Maria)/gi, function(input) {
//     return input.toUpperCase();//pega as ocorrencias de joao e maria e converte para maiusculas
// }));


//usando funçoes
console.log(texto.replace(/(joão|Maria)/gi, function(input) {
    return ' ### ' + input.toUpperCase() + ' ###';//pega as ocorrencias de joao e maria e converte para maiusculas e acrescenta os caracteres entre aspas
}));