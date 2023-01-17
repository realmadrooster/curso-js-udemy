//valor por referencia

//const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
//criando array com construtor
//const nomes = new Array('Eduado', 'Maria', 'Joana');
//const novo = [...nomes];//fazendo a copia dessa forma se eu mudar novo nao afeta nomes
// console.log(nomes);
// nomes[2] = 'Joao';
// console.log(nomes);
// delete nomes[2];
// console.log(nomes);

// novo.pop();
// nomes.shift();
// console.log(novo);
// console.log(nomes);

//pegando o comprimento do array
// console.log(nomes.length);

// const removidoFinal = nomes.pop();//remove o ultimo item e retorna o valor removido
// const removidoInicio = nomes.shift();
// console.log(nomes, removidoFinal, removidoInicio);

// nomes.push('Joao');//adiciona um valor ao final do array
// nomes.unshift('Carlos');//adiciona um valor no inicio de um array
// console.log(nomes);

// const novo = nomes.slice(1, 3);//fatia o array começando do indice 1 indo ate o 3 elemento
// console.log(novo);

// //convertendo uma string em um array
// const nome = 'Luiz Carlos Pinto Junior';
// const nomes = nome.split(' ');
// console.log(nomes);

//convertendo um array em uma string
const nomes =['Luiz','Carlos','Pinto','Junior'];
const nome = nomes.join(' ');//o argumento do metodo join informa qual elemento sera utilizado para separar os itens da string, nesse caso um espaço
console.log(nome);