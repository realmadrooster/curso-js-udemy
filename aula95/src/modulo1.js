//exportando individualmente
// export const nome = 'Luiz';//posso exportar diretamente
// export const sobrenome = 'Carlos';
// export const idade = 43;
// export const cpf = 123;//variavel nao sera exportada devido a ausencia da palavra export
// export function soma(x, y) {
//     return x + y;
// }


const nome = 'Luiz';//posso exportar diretamente
const sobrenome = 'Carlos';
const idade = 43;
const cpf = 123;//variavel nao sera exportada devido a ausencia da palavra export
function soma(x, y) {
    return x + y;
}

// export default function soma(x, y) {
//     return x + y;
// }

//export { nome, sobrenome, idade, soma };
//posso exportar uma varivel com um apelido
//export { nome, sobrenome, idade, soma };//exportando todas as variaveis simultaneamente

function multiplica(x, y) {
    return x * y;
}; 

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

//posso exportar uma variavel ou uma funçao como default
export { nome, sobrenome, idade, soma, multiplica};