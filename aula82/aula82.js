const _velocidade = Symbol();//gera um id a cada vez que é chamado -> propriedade privada que sera referenciada internamente na classe
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;//this.velocidade é substituida por this[_velocidade] restringindo o acesso a variavel externamente
    }
    
    set velocidade(valor) {//permite que possa alterar o valor da chave _velocidade
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <=0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {//getter para exibir a chave _velocidade
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0 ) return;
        this[_velocidade]--;
    }

}

const c1 = new Carro('Fusca');

for(let i = 0; i <= 200; i++) {
    c1.acelerar();
}

c1.velocidade = 20;//atraves do setter consigo alterar a chave conntedo a velocidade restrita a classe // acessando setter

console.log(c1.velocidade);//acessando getter