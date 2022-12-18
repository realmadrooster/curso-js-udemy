// const verdadeira = true;
// //let tem escopo de bloco {...bloco}
// //var so tem escopo de funçao

// let nome = 'Luiz';
// var nome2 = 'Luiz';

// if (verdadeira){
//     let nome = 'Carlos';
//     var nome2 = 'Pinto';
//     //console.log(nome,nome2);
//     if (verdadeira){
//         var nome2 = 'Junior';
//         let nome = 'Outra coisa';
        
//     }
// }   
// console.log(nome,nome2);
var sobrenome = 'Pinto'

function falaOi(){
    var nome = 'Luiz';//essa variavel so existe dentro da funçao
    console.log(nome,sobrenome);
}
falaOi();