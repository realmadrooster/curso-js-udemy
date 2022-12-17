const mensagem = document.querySelector('.container h1');

function getnomeMes(numeroMes){
    const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
    return meses[numeroMes]
}

function getMesTexto(mes){
    let mesTexto;
    switch(mes){
        case 0:
            mesTexto = 'Janeiro';
            return mesTexto;
        case 1:
            mesTexto = 'Fevereiro';
            return mesTexto;
        case 2:
            mesTexto = 'Março';
            return mesTexto;
        case 3:
            mesTexto = 'Abril';
            return mesTexto;
        case 4:
            mesTexto = 'Maio';
            return mesTexto;
        case 5:
            mesTexto = 'Junho';
            return mesTexto;
        case 6:
            mesTexto = 'Julho';
            return mesTexto;
        case 7:
            mesTexto = 'Agosto';
            return mesTexto;
        case 8:
            mesTexto = 'Setembro';
            return mesTexto;
        case 9:
            mesTexto = 'Outubro';
            return mesTexto;
        case 10:
            mesTexto = 'Novembro';
            return mesTexto;
        case 11:
            mesTexto = 'Dezembro';
            return mesTexto;
        default:
            mesTexto = '';
            return mesTexto;
    }
   
}
function getDiaSemanaTexto2(diaSemana){
    const diasSemana = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sabado']
    return diasSemana[diaSemana];
}

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
             diaSemanaTexto = 'Sexta-feira';
             return diaSemanaTexto;
         case 6:
             diaSemanaTexto = 'Sabado';
             return diaSemanaTexto;
         default:
             diaSemanaTexto = '';
             return diaSemanaTexto;
     }
   
 }
 const data = new Date('2019-10-07 22:52:00');
 const horas = data.getHours();
 const minutos =data.getMinutes();
 const diaTexto = data.getDate();
 const anoTexto = data.getFullYear();
 const diaSemana = data.getDay();
 const diaSemanaTexto = getDiaSemanaTexto2(diaSemana);
 const mesAno = data.getMonth();
 const mesAnoTexto = getnomeMes(mesAno);

 mensagem.innerHTML = `${diaSemanaTexto}, ${diaTexto} de ${mesAnoTexto} de ${anoTexto} <br> ${horas}:${minutos}`;


//const opcoes = {
//    dateStyle: 'full',
//    timeStyle: 'short'
//};

//mensagem.innerHTML = data.toLocaleDateString('pt-BR');
//mensagem.innerHTML = data.toLocaleDateString('pt-BR',{dateStyle:'full',timeStyle:'short'});