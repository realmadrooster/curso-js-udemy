/*
const tresHoras = 60 * 60 * 3 * 1000;//3 horas em milesimos de segundos
const umDia = 60 * 60 * 24 * 1000;//um dia em milesimos de segundos
const data = new Date(0 + tresHoras + umDia);//new -> funçao construtora
//Date(0) -> 01/01/1970 Timestamp unix ou epoca unix
*/
/*
const data = new Date(2019, 3, 20, 15, 14, 27, 500);//ano 2019, mes abril,dia 20, 15 horas, 14 minutos, 27 segundos,500 milesimos de segundo
console.log(data.toString());
*/
//const data = new Date('2019-04-20 20:23:59');//passando data como string
/*
const data = new Date(1670878856239);//data em milisegundos
console.log('dia',data.getDate());
console.log('Mês', data.getMonth());
console.log('ano',data.getFullYear());
console.log('hora', data.getHours());
console.log('min',data.getMinutes());
console.log('seg', data.getSeconds());
console.log('ms',data.getMilliseconds());
console.log('dia semana', data.getDay());

console.log(Date.now());//calcula o tempo desdo o marco 0 ate o dia atual em ms
console.log(data.toString());
*/
function zeroAEsquerda (num){
    return num >=10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);