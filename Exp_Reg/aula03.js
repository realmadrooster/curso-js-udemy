const { texto, arquivos } = require('./base');

//quantificadores -> podem ser usados para encontrar coisas

// * (opcionais) 0 ou n
// + (obrigatorio) 1 ou n
// ? (opcionais) 0 ou 1
// \ caractere de escape -> os metacaracteres que a seguem sao considerados caracteres normais
// {n,m} n-> numero minimo de ocorrencias e m -> numero maximo
//{1} somente uma vez
//{10,} no minimo 10
//{,10} de 0 a 10
//{10} especifico 10 

// const regExp1 = /jo+ão+/gi;
// console.log(texto.match(regExp1));//pega as repetiçoes multiplas ex: joooooaaoooooo

// const regExp2 =/\.(jpg|jpeg)/gi;//2 grupos distintos

const regExp2 =/\.((jp|JP)(e|E)?(g|G))/gi;//o metacaractere ? apos o 'e' pode aparecer 0 ou 1 vez

for (const arquivo of arquivos) {
    const valido = arquivo.match(regExp2);

    //if(!valido) continue;

    console.log(arquivo, valido);
}