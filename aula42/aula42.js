//Escreva uma funçao chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
//Retorne true se a imagem estiver no modo paisagem.

// const largura = 100;
// const altura = 50;

// function ePaisagem (largura, altura){
//     if (largura > altura){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(ePaisagem(largura, altura));

// function ePaisagem (largura, altura){
//     return largura > altura ? true : false;
// }
// console.log(ePaisagem(1020, 1090));

// function ePaisagem (largura, altura){
//     return largura > altura;
// }
// console.log(ePaisagem(1080, 1920));

//soluçao com arrow function

const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1920, 1080));