function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-br',{hour12: false});
}
function funcaoDoInterval() {
    console.log(mostraHora());
}

//setInterval(funcaoDoInterval, 2000);

//mesma coisa acima so que com funçao anonima

const timer = setInterval(function () {console.log(mostraHora())},1000);

setTimeout(function() {clearInterval(timer);}, 4000);

setTimeout(function() {
    console.log('Olá mundo');
},7000);//executa apos 7 s