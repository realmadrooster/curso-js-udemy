//                0       1       2 
const alunos = ['Luiz','Maria','João'];
console.log(alunos[0]);//exibe o item de indice 0
console.log(alunos);//exibe o array completo
alunos[0]='Carlos';//altero indice 0
console.log(alunos);

console.log(alunos.length);//exibe o tamanho do array

alunos[alunos.length] = 'Luiza';//adiciona um elemento ao final do array

alunos.push('Otavio');//adiciona um elemento ao final do array

alunos.unshift('Iago');//adiciona um elemento no inicio do array
const removidof = alunos.pop()//remove no final
const removidoi = alunos.shift()//remove no inicio
console.log(alunos);

delete alunos[1];//deleta posiçao 1
console.log(alunos[1]);//exibe undefined

console.log(alunos.slice(0,3));//fatia de 0 a terceira posicao no caso item 2

console.log(alunos.slice(0,-2));//fatia começando do 0 ate o comprimento do array -2

console.log(typeof alunos);//exibe o tipo como objeto

console.log(alunos instanceof Array);//testa se é um array