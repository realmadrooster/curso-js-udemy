//produto -> aumento, desconto
//camiseta = cor, caneca = material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);//linka o objeto camiseta ao objeto produto
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);//cria um objeto e seta o prototype dele com o do objeto produto
Camiseta.prototype.constructor = Camiseta;//setando o construtor da camiseta como sendo camiseta

//sobreescrevendo o metodo aumento de camiseta
Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

//criando uma funçao que herda de Produto
function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;//nao deixa setar o valor se ele for diferente de numbern
            estoque = valor;
        }
        
    });
}//cria um objeto e seta o prototype dele com o do objeto produto

Caneca.prototype = Object.create(Produto.prototype);//cria um objeto e seta o prototype dele com o do objeto produto
Caneca.prototype.constructor = Caneca;//setando o construtor da camiseta como sendo caneca

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const produto = new Produto('Gen', 111);
const caneca = new Caneca('Caneca', 13, 'Plastico', 5);

caneca.estoque = 19;//usando o setter

camiseta.aumento(10);
console.log(camiseta);
console.log(produto);
console.log(caneca);
console.log(caneca.estoque);//usando o getter