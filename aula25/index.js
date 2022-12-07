const numero = -10;
/*
if (numero >= 0 && numero <=5){
    console.log('O numero esta entre 0 e 5.');
}else{
    console.log('O numero não esta entre 0 e 5.');
}
*/
if ( numero < 10){
    console.log('o numero é menor que 10');
}//caso necessite de testar uma condiçao adicional sem alterar o fluxo das condiçoes if else utilizo um novo if externo aos anteriores

if (numero >= 0 && numero <=5){
    console.log('O numero esta entre 0 e 5.');
}else if(numero >= 6 && numero <=8){
    console.log('O numero esta entre 6 e 8.');
}else if(numero >= 9 && numero <= 11){
    console.log('o numero esta entre 9 e 11');
}else{
    console.log('O numero nao esta entre 0 e 11');
}