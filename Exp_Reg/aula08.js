const { html2 } = require('./base');

// $1 $2 $3 <- retrovisores(fazem referencia aos seus respectivos grupos)

// .*-> dot all (qualquer caractere que pode existir dentro da tag)

// . nao representa uma quebra de linha

console.log(html2.match(/<\w+>.+<\/.+/g));//w serve para pega todos os caracteres maiusculos e minusculos

console.log(html2.match(/<(\w+).*?>.+?<\/\1>/g));// \1 fala para encontrar a mesma coisa que ele encontrou no grupo 1 ->(\w+), o ? apos o + faz com que ele selecione cada uma das tags

console.log(html2.match(/<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/g));//[\s\S] para pegar as quebras de linha

// p ola mundo 
// <p>Ola mundo</p>

console.log(html2.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g, '$1 HAHA $3 HAHA $4'));
// o texto é o retrovisor 3

// ?: serve para nao utilizar o grupo como retrovisor
