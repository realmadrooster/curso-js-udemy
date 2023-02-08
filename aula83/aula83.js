class DispositivoEletronico {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado.');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado.');
            return;
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {//extends faz com que a classe Smartphone herde da classe Dispositivo eletronico
    constructor(nome, preco, cor, modelo) {
        super(nome, preco);//super e o nome do parametro permite que o codigo do construtor da classe pai possa ser redefinido
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, preco , temWifi) {
        super(nome, preco);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha, voce alterou o metodo ligar.')
    }

    falaOi() {
        console.log('oi');
    }
}
const s1 = new Smartphone('Samsung', '1200','Preto', 'Galaxy S10');
console.log(s1);

const t1 = new Tablet('q1' ,'100', 'tem');
console.log(t1)
t1.ligar();
t1.falaOi();