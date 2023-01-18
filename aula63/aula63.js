//               -5      -4      -3        -2       -1   
//               0        1       2         3        4
const nomes = ['Maria','Joao','Eduardo','Gabriel','Julia'];
//nomes.splice(indice, delete, elem1, elem2, elem3);

//mesma coisa que o pop 
//const removidos = nomes.splice(4,1);//retorna um array

// const removidos = nomes.splice(3, 0, 'Luiz');//adiciona no indice 3 luiz e nao remove ninguem

// const removidos = nomes.splice(3 , 2, 'Luiz', 'Otavio');//a partir do indice 3 remova 2 itens e adicione no lugar luiz e otavio

//simulando o push
//nomes.splice(nomes.length, 0, 'Luiz');//inseri a parir do comprimento do array(ultimo indice + 1), nao remove nenhum e insere luiz

//simulando unshift
const removidos = nomes.splice(0, 0, 'Luiz',' Carlos');//a partir do indice 0 nao remova nenhum e adicione luiz e carlos
console.log(nomes, removidos);