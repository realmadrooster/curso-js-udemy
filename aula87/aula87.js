function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// function esperaAi(msg, tempo, cb) {
//     setTimeout(() => {
//         console.log(msg);
//         if(cb) cb();
//     }, tempo);
// }
// //fazendo com que as funçoes sejam executadas na ordem com callbacks
// esperaAi('frase1', rand(1 ,3), function() {
//     esperaAi('frase2', rand(1, 3), function() {
//         esperaAi('frase3', rand(1, 3));
//     });
// });

//fazendo com que as funçoes sejam executadas na ordem com promisses
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });    
}

esperaAi('Conexao com o BD', rand(1, 3)).then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da base', rand(1, 3));
}).then(resposta => {
    console.log(resposta);
    return esperaAi(2222, rand(1, 3));
}).then(resposta => {
    console.log(resposta);
}).then(() => {
    console.log('Eu serei o ultimo a ser exibido');
}).catch(e => {
    console.log('ERRO:', e);
});

console.log('Isso aqui sera exibido antes de qualquer coisa');