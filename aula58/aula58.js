//funçao construtora -> objetos
//funçao fabrica -> objetos
//construtora -> new Pessoa

function Pessoa(nome, sobrenome) {
    //atributos ou metodos privados
    const ID = 122345;//declarado com let ou const o atributo privado interno que so é visivel dentro do objeto nao pode ser acessado de fora
    const metodoInterno = function() {

    };//metodo interno que segue o mesmo padrao do atributo privado interno

    //atributos ou metodo publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou um metodo');
    };
}

const p1 = new Pessoa('Luiz', 'Carlos');
const p2 = new Pessoa('Maria', 'Clara');

console.log(p1.nome);
p1.metodo();