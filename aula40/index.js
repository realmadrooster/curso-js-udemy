const numeros = [1,2,3,4,5,6,7,8,9];
let i = 0;

//continue continua para a proxima iteraçao
//break sai do laço

for (let numero of numeros){
    if (numero === 2 || numero === 3){
        continue;
    }
    if (numero === 5){
        console.log('pulei o 5');
        continue;
    }
    console.log(numero);
    if (numero === 9){
        console.log('9 encontrado, saindo...');
        break;
    }
    
}
while (i < numeros.length){
    let numero = numeros[i];
    if (numero === 2){
        console.log('pulei o 2');
        i++;
        continue;
    }

    console.log(numero);
    if (numero === 7){
        console.log('7 encontrado, saindo...');
        break;
    }
    i++;
}