// const nome = 'Luiz';
// const sobrenome = 'Carlos';

// const falaNome = () => nome + ' ' + sobrenome;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// //posso fazer a mesma coisa acima com um atalho
// // exports.NOME = nome;//a variavel nao precisa ter o nome da chave
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar';

// // // console.log(module.exports);
// // console.log(exports);

//fazendo com classes

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;

//exportando tudo de uma vez
const nome = 'Luiz';
const sobrenome = 'CArlos';

module.exports = {
    nome, sobrenome, Pessoa
};