const pessoas = [
    { id: 3, nome: 'Luiz'},
    { id: 2, nome: 'Maria'},
    { id:1, nome: 'Helena'},
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = {...pessoa};   
// }

//criando uma estrutura que possui um par chave => objeto  usando o objeto Map

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa});//a chave pode ser qualquer uma nesse caso id, e o outro parametro é o valor nesse caso o objeto em questao no laço, alem do que a chave permanece sendo um number e a ordem de inserçao se manteve o que nao acontece no codigo comentado acima
    
}

console.log(novasPessoas.get(2));//get para acessar o valor

for (const pessoa of novasPessoas) {
    console.log(pessoa);
}//retorna um array para cada elemento

// for (const [identifier, { id, nome }] of novasPessoas) {
//     console.log(identifier, id, nome);
// }

//mostra so as chaves dos objetos

for (const pessoas of novasPessoas.keys()) {
    console.log(pessoas);
}

//mostra so os valores

for (const pessoas of novasPessoas.values()) {
    console.log(pessoas);
}

//deletando uma chave
novasPessoas.delete(2);//deleta chave 2
console.log(novasPessoas);