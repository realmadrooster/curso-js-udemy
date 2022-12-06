/*
Entre 0 - 11 - Bom Dia
Entre 12 - 17 - Boa Tarde
Entre 18 - 23 - Boa Noite
*/
//if pode ser usado sozinho
//sempre que utilizo else, preciso de um if
//eu posso ter varios else ifs na checagem
//so posso ter um else na checagem,no final
//podemos usar condiçoes sem else if, utilizando apenas if e else
const hora = 23;

if(hora <= 11){
    console.log('Bom Dia!');
}else if(hora >=12 && hora <= 17){
    console.log('Boa Tarde!');
}else if(hora >=18 && hora <= 23){
    console.log('Boa Noite!');
}else{
    console.log('Olá');
}

const tenhoGrana = 'Jogo do galo';
 if (tenhoGrana){
    console.log('Vou sair de casa');
 }else{
    console.log('Nao vou sair de casa');
 }