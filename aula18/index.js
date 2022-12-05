//const array = [1,2,3];
//array.push(4);
//array[0] = 'Luiz';
//array = 'outra';//nao pode fazer isso, para funcionar a varivel deveria se declarada com let 
/*
//criando objeto
const pessoa1 = {
    nome:'Luiz',sobrenome:'Pinto',idade:43
};
console.log(pessoa1.nome);
*/
/*
//funçao que cria objetos
function criaPessoa (nome,sobrenome,idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
/*
function criaPessoa (nome,sobrenome,idade){
    return { nome,sobrenome,idade
    };
}
*/
/*
const pessoa1 = criaPessoa('Luiz','Carlos',43);
const pessoa2 = criaPessoa('Alice','Castro',8);
console.log(pessoa2.idade);
*/

const pessoa1 = {
    nome: 'Luiz',
    sobrenome:'Pinto',
    idade: 43,
    //metodo fala
    fala(){
        console.log(`${this.nome} ${this.sobrenome} esta falando GAlooooo`);
        console.log(`a minha idade atual é ${this.idade}.`);
    },
    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();

pessoa1.fala();
pessoa1.incrementaIdade();

pessoa1.fala();
pessoa1.incrementaIdade();