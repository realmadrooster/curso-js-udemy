//factory function(funçao fabrica)
//constructor function (funçao construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        fala: function(assunto = 'falando sobre nada.') {
            return `${this.nome} está ${assunto}.`
        },
        altura,
        peso,
        get nomeCompleto() {//GEtter
            return `${this.nome} ${this.sobrenome}`;
        },
        //setter //permite que setemos os valores dos atributos externamente 
        set nomeCompleto(valor) {
            valor = valor.split(' ');//faz com que valor fatie seu conteudo intercalando os espaços vazios
            this.nome = valor.shift();//retorna o primeiro valor do array para nome e o remove em seguida
            this.sobrenome = valor.join(' ');//pega o restante do array e junta-os em uma string separada por espaço
            console.log(valor);
        },
        //adiciona o get para fazer com que o metodo imc funcione como um atributo
        get imc() { //Getter
            const indice = this.peso /(this.altura ** 2);
            return indice.toFixed(2);
        }

    };
}
const p1 = criaPessoa('luiz', 'carlos',1.8, 80);
//console.log(p1.imc());//como fazer sem a definicao do metodo com o get
console.log(p1.imc);
const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 42);
console.log(p2.fala('falando sobre js'));
//console.log(p2.imc());//como fazer sem a definicao do metodo com o get
console.log(p1.imc);
//p1.nomeCompleto = 'Luiz carlos pinto junior';
p1.nomeCompleto = 'Iago Ferreira Pinto'
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala('falando sobre Maria'));