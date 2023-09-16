//g - global (encontra todas as ocorrencias) -> geralmente usado para encontra mais de uma ocorrencia
//i - insensitive(pega maiusculas e minusculas) -> not case sensitive
//() grupos
// | ou

const { texto } = require('./base');

//const regExp1 = /joão/gi;

const regExp1 = /(maria|joao|luiz)(, hoje sua esposa)/i

//console.log(regExp1.test(texto));//existe joao dentro de texto?

//console.log(regExp1.exec(texto)[0]);//indice 0 do array

//console.log(regExp1.exec(texto).index);//retorna a posiçao exata em que o caracter ou a cadeia de caracteres foi encontrada

//console.log(regExp1.exec(texto).input);//exibe o texto completo

const found = regExp1.exec(texto);

//console.log(found[0]);//tudo que foi encontrado no indice 0 ou seja tudo que foi encontrado

//console.log(found[1]);//primeiro grupo encontrado

//console.log(found[2]);//segundo grupo encontrado

//para que o erro de retorno null nao seja exibido caso eu insira uma string que nao conste em found

if (found) {

    console.log(found[0]);//tudo que foi encontrado no indice 0 ou seja tudo que foi encontrado
    console.log(found[1]);//primeiro grupo encontrado
    console.log(found[2]);//segundo grupo encontrado

}