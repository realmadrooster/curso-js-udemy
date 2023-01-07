function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome };
}

const p1 = criaPessoa('luiz', 'carlos');

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto; 
    }
    return falaResto;
}
const olaMundo = falaFrase('olá');
console.log(olaMundo('mundo!'));

//faz a mesma coisa que as duas linha acima

const fala = falaFrase('olá');
const resto = fala('mundo!');
console.log(resto);

function criaMultiplicador(multiplicador) {
    function multiplicacao(n) {
        return n * multiplicador;
    }
    return multiplicacao;
}
//funcao criaMultiplicador escrita de forma mais concisa
//funcao closure
function criaMultiplicador2(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(9));
console.log(triplica(9));
console.log(quadriplica(9));