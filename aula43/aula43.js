// Escreva uma funçao que recebe um numero e retorne o seguinte :
//numero é divisivel por 3 = Fizz
//numero é divisivel por 5 = Buzz
//numero é divisivel por 3 e 5 =retorna o proprio numero
//checar se o numero é realmente um numero
//use a funçao com numeros de 0 a 100
//const numero = Math.floor(Math.random(num) * 100);
//

//     function verificaNumero (num){
    
    

//     const eNumero = typeof(num);
    
//     if (eNumero == 'number'){
//         console.log('é um numero');
//     }
    
//     if (num % 3 == 0 && num % 5 == 0){
//         return 'FizzBuzz';
//     }
//     else if (num % 3 == 0 ){
//         return 'Fizz';
//     }else if ( num % 5 == 0){
//         return 'Buzz';
//     }else {
//         return num;
//     }
// }
// const numero = Math.floor(Math.random() * 100)
// console.log(numero);
// console.log(verificaNumero(numero));

function fizzBuzz(numero){
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
   
    return numero;
}

for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}
