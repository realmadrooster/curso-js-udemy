// 705.484.450-52  070.987.720-03
/*
7x 0x 5x 4x 8x 4x 4x 5x 0x 
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0  = 237 //

11 - (237 % 11) = 5 (primeiro digito)//se o resultado da operaçao for maior que 9 o digito considerado sera o 0


7x 0x 5x 4x 8x 4x 4x 5x 0x 
11 10  9  8  7  6  5  4  3
70 0  45  32 56 24 20 0  10 = 284

//a contagem regressiva começa de 11 devido a insercao do primeiro digito encontrado na operaçao anterior


11 - (284 % 11) = 2 (primeiro digito)//se essa operaçao for maior que 9 considera-se 0

705.484.450-52 === 705.484.450-52 = true cpf valido
*/

// let cpf = '705.484.450-52';//tem que ser uma string senao podemos ter problemas com cpfs que começam com 0
// let cpfLimpo = cpf.replace(/\D+/g,'');//expressao regular que remove tudo que nao for digito 
// let cpfArray = Array.from(cpfLimpo);//converte a string em um array
// console.log(cpfArray.reduce((ac,val) => ac + Number(val), 0));

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g,'');
        }
    });
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;
    
    const cpfParcial = this.cpfLimpo.slice(0, -2);//variavel com os 9 primeiros digitos do cpf
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    
    const novoCpf = cpfParcial + digito1 + digito2;

    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);//cria um array da string cpfParcial
    
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);
    
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);//cria uma sequencia que tem como base o primeiro caractere do atributo cpfLimpo
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('070.987.720-03');
//console.log(cpf.cpfLimpo);
//cpf 111.111.111-11 é avaliado como true portanto deve ser verificado
if(cpf.valida()) {
    console.log('Cpf válido');
}else {
    console.log('Cpf inválido');
}

