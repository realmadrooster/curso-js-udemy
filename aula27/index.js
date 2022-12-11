// (condicao) ? 'valor para verdadeiro' : 'valor para false';

const pontuacaoUsuario = 999;
const nivelUsurario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';
//se usurio nao alterar a cor é aplicado a cor padrao que recebera preta
console.log(nivelUsurario, corPadrao);
/*
if (pontuacaoUsuario >= 1000){
    console.log('Usuario VIP');
}else{
    console.log('Usuario normal');
}
*/