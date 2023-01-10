//IIFE -> immediately invoked function expression
// (function() {
//     const nome = 'Luiz';
//     console.log(nome);
// })();
// //as variveis da funçao iife estao protegidas nao tocando o escopo global
// const nome = 'Pinto junior';

(function(idade, peso, altura) {
    const sobrenome = 'Carlos';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Luiz'));
    }
    falaNome();
    console.log(idade, peso, altura);
})(43, 102, 1.80);

const nome = 'Qualquer coisa'