//For in -> lê os indices ou chaves do objeto
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Carlos',
    idade:43
};

console.log(pessoa.nome);
console.log(pessoa['nome']);

for(let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

const frutas = ['pera', 'maçã', 'uva'];

for (let i in frutas){
    console.log(frutas[i]);
}