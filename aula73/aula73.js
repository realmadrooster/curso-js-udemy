/*
Object.values
Object.entries
Object.assign(destino, any)->any pode ser uma sequencia de propriedades
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

// ja vimos
Object.keys(retorna as chaves)
Object.freeze(congela o objeto)
Object.defineProperties(define varias propriedades)
Object.defineProperty(define uma propriedade)
*/

const produto = {nome: 'Caneca', preco: 1.8, material: 'porcelana'};
console.log(Object.values(produto));//pega os valores do objeto

//posso iterar sobre os pares de chave e valor no objeto especificado
for(let entry of Object.entries(produto)) {
    console.log(entry);
}
// for(let [chave, valor] of Object.entries(produto)) {
//     console.log(chave, valor);
// }//tabem consigo iterar sobre o array gerado

//tambem é possivel passando os indices do array
for(let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]);
}

console.log(Object.entries(produto));//gera um array com o par de chaves e valores do objeto produto
Object.defineProperty(produto, 'nome', {
    writable: false,//nao podemos mais alterar a propriedade nome
    configurable: false,//nao posso mais configurar essea propriedade como por exemplo deletar
    value: 'Qualquer outra coisa'
});
delete produto.nome;
//Object.getOwnPropertyDescriptor
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));//exibe informaçoes sobre as configuraçoes da propriedade do objeto especifico .qual objeto e qual propriedade quero alterar

//Object.freeze(produto);//congela o objeto que nao pode mais ser alterado

//const caneca = {...produto,
material: 'porcelana'//adicionando um atributo
//};//com o spread operator fazemos uma copia do objeto e nao a referencia de sua posiçao na memoria com outraCoisa = produto;

//outra forma de copiar o objeto->Object.assign
const caneca = Object.assign({}, produto, {material:' Porcelana'});//adicionando o atributo material ao objeto , obs: posso passar atributos multiplos

//tambem podemos copiar de forma mais trabalhosa
//const caneca = {nome: produto.nome, preco: produto.preco};

//exibe as chaves do objeto produto
console.log(Object.keys(produto));

caneca.nome = 'Outro nome';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);