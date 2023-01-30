//new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    //__proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    //__proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);//configura o prototype de objB que sera o objA
Object.setPrototypeOf(objC,objB);//configura o prototype do objC que sera o objB
//objC -> objB -> objA -> Object.prototype 
console.log(objB.chaveA);
console.log(objC.chaveB);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

//literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};
//configurando o prototype de p2 como sendo o o prototype do objeto Produto
Object.setPrototypeOf(p2, Produto.prototype)

p1.desconto(10);
console.log(p1);

p2.desconto(20);
console.log(p2);

// const p3 =Object.create(Produto.prototype);//cria o objeto  p3 derivado de Produto diretamente, Cria objeto setando o prototype

//criando objeto ao mesmo tempo em que setamos seu prototype e configuramos suas chaves
const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 113
    },
}); 

//definindo as chaves
//p3.preco = 13;
p3.nome = 'Boné';
p3.aumento(13);
console.log(p3);