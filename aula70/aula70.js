const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Carlos',
    fala() {
        console.log('oi');
    }
};
pessoa.fala();
console.log(pessoa.nome);
console.log(pessoa['sobrenome']);//posso acessar os atributos com colchetes e o nome da chave entre aspas

//acessando a chave dinamicamente
const chave = 'nome';
console.log(pessoa[chave]);

//outra forma de criar objetos(com construtor)
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Pinto';
pessoa1.idade = 43;
//delete pessoa1.nome; //apaga o atributo nome
pessoa1.falarNome = function() {
    return (`${this.nome} esta falando seu nome`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1);
console.log(pessoa1.sobrenome);
pessoa1.falarNome();
console.log(pessoa1.getDataNascimento());
//visualizando os valores dos atributos de um objeto com um laço for in
for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}

//factory functions 
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {//get faz com que o metodo seja tratado com um atributo
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criaPessoa('Luiz', 'Carlos');
console.log(p1.nomeCompleto);

//constructor functions
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this);//trava qualquer objeto gerado a partir dessa funçao para alteraçoes inclusive nao posso incluir metodos somente posso antes do freeze no corpo da funçao pessoa // funciona tambem com array object.freeze(nome do array)
}

const p2 = new Pessoa('Luiz', 'Carlos');
Object.freeze(p2);//trava o objeto impossibilitando alteraçoes 
//const p1 = (enderecodememoria -> 'valor')
//const p1.enderecodememoria = {nome:'outra coisa'}
//const p1 = (novoendereco de memoria) nao posso fazer isso 
//p1 = 'outra coisa' //nao posso trocar a referencia de memoria de  uma constante
p2.nome = 'Outra coisa';//posso alterar o valor nao atribuir um novo endereço de memoria a uma constante // o freeze nao deixa aconter a alteraçao
console.log(p2);//ao executar o console.log podemos ver a funçao que construiu o novo objeto