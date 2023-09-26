const { lookahead } = require('./base');

console.log(lookahead);

//console.log(lookahead.match(/.+[^in]active$/gim));//so pega as linhas que possuem active no final

//Positive lookahead (frases que tem active)

//console.log(lookahead.match(/.+(?=[^in]active)/gim));//pega os demais itens somente das linhas que terminam com active

//Positive lookahead (frases que tem inactive)

//console.log(lookahead.match(/.+(?=\s+inactive)/gim));//checa se tem a expressao inactive e retorna o resto da string

//Negative lookahead(frase  que nao tem active)
//console.log(lookahead.match(/^(?!.+[^in]active).+$/gim))//se a palavra active nao existir na frase vc retorna a frase

//Negative lookahead(frase  que nao tem inactive)
//console.log(lookahead.match(/^(?!.+inactive).+$/gim))//se a palavra inactive nao existir na frase vc retorna a frase

//Positive lookbehind(frases que começam com ONLINE)
//console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim));

//Negative lookbehind (frases que nao começam com ONLINE)
//console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim));

const cpf = `
012.250.796-10
000.000.000-01
999.999.999-99
555.555.555-55
111.111.111-11
147.285.963-10
aaa.bbb.ccc-dd
`

console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm));//nao pega repetiçoes