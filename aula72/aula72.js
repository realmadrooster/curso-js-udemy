//defineProperty -> Getter e Setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        configurable: true,// configuravel?
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('bad value');
                return;
            }
            estoquePrivado = valor;
            // if (typeof valor !== 'number') {
            //     throw new TypeError('Mensagem');
            // }
            // estoquePrivado = valor;
        }
        
    });
}

//getter e setter com funçao factory
function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa.', '');
            nome = valor;
        }
    };
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
//p1.estoque = 'O valor que eu quero';//nao executa porque nao é um number
p1.estoque = 500;
console.log(p1.estoque);

const p2 = criaProduto('camiseta');
p2.nome = 'qualquer coisa.';
console.log(p2.nome);