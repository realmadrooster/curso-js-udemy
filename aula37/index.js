const nomes = ['Luiz', 'Carlos', 'Pinto', 'Junior'];

//for classico - geralmente com iteraveis(arrays ou strings)

//for in - retorna o indice ou chave(strings array objetos)

//for of - retorna o valor em si( iteraveis, arrays ou strings)
for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

console.log('#####');

for (let i in nomes){
    console.log(nomes[i]);
}

console.log('#####');

for (let valor of nomes){
    console.log(valor);
}

console.log('#####');

nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});
