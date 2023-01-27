function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave?
        value: estoque, //valor -> posso fazer com funçao conforme abaixo
        // value: function() {
        //     return estoque;
        // },
        writable: true,//pode alterar?
        configurable: true// configuravel?
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //mostra a chave?
            value: nome, //valor -> posso fazer com funçao conforme abaixo
            // value: function() {
            //     return estoque;
            // },
            writable: true,//pode alterar?
            configurable: true// configuravel?
        },
        preco: {
            enumerable: true, //mostra a chave?
            value: preco, //valor -> posso fazer com funçao conforme abaixo
            // value: function() {
            //     return estoque;
            // },
            writable: true,//pode alterar?
            configurable: true// configuravel?
        },
    });
}

const p1 = new Produto('camiseta' , 20, 3);
p1.estoque = 500000;
//delete p1.estoque;//se cofigurable for true posso deletar a chave
console.log(p1);
//console.log(p1.estoque());
console.log(Object.keys(p1));
//exibe as chaves com um laço for
for(let chave in p1) {
    console.log(chave);
}