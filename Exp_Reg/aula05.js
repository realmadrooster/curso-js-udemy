const { alfabeto } = require('./base');

//[abc] -> conjunto [^] -> negaçao
// range [0-9]-> de 0a 9
//[min-maxOUTRACOISA] 
//[^min-maxOUTRACOISA] -> tudo menos isso
console.log(alfabeto.match(/[abc]/g));//encontra item por item a, b, c
console.log(alfabeto.match(/[abc123]+/g));//encontra as sequencias dos conjuntos
console.log(alfabeto.match(/[^abc123]/g));//encontre qualquer coisa com excessao do que esta entre colchetes
console.log(alfabeto.match(/[0-9]/g));//encontra os numeros dentro do range de 0 a 9 , posso fazer com letras [a-z] se tiver o + apos o colchete ele pega tudo junto
console.log(alfabeto.match(/[a-zA-Z0-9]+/g));//pegando ranges simultaneos
console.log(alfabeto.match(/[\u003F-\u0040]/g));//range com caracteres unicode -> verificar tabela unicode na net, pode ser usado para encontrar letras acentuadas
console.log(alfabeto.match(/\w+/g));//mesma coisa que de a-z , A-Z, e de 0-9 simultaneamente
console.log(alfabeto.match(/\W/g));//negaçao da expressao acima -> encontra tudo menos os itens dos ranges citados na expressao anterior
console.log(alfabeto.match(/\d+/g));//encontra o range 0 a 9
console.log(alfabeto.match(/\D+/g));//nega os digitos de 0 a 9
console.log(alfabeto.match(/\s+/g));//encontra 1 ou + espaços
console.log(alfabeto.match(/\S+/g));//pega tudo menos os espaços -> com o + apos o S mostra em blocos e nao item a item