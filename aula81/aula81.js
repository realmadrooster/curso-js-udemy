class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar() {
        console.log(`${this.nome} está falando.`);
    }
    comer() {
        console.log(`${this.nome} está comendo.`);
    }
    beber() {
        console.log(`${this.nome} está bebendo.`);
    }
    
}

const p1 = new Pessoa('Luiz', 'Carlos');
const p2 = new Pessoa('Pinto', 'Junior');
const p3 = new Pessoa('Alice', 'Castro');
const p4 = new Pessoa('Ian', 'Iago');
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

//fazendo a mesma coisa comm funçao construtora

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`);
};

const p5 = new Pessoa2('Tomas', 'Aquino');
console.log(p5);
p5.falar();