function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(typeof msg !== 'string'){
                reject('Cai no erro');
                return;
            } 
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });    
}

// esperaAi(7, rand(1, 3)).then(resposta => {
//     console.log(resposta);
// }).catch(e => {
//     console.log('ERRO:', e);
// });

//Promise.all Promise.race Promise.resolve Promise.reject
// const promises = [
//     //'Primeiro valor',
//     esperaAi('Promise 1', rand(1, 5)),
//     esperaAi('Promise 2', rand(1, 5)),
//     esperaAi('Promise 3', rand(1, 5)),
//     esperaAi(1000, rand(1, 5))
//     //'Outro valor'
    
// ];
// //resolve todas as promises na ordem do array
// Promise.all(promises).then(valor => {
//     console.log(valor);
// }).catch(e => {
//     console.log(e);//se um erro for capturado as demais promises nao serao executadas
// });

// //resolve a promise que executar primeiro
// Promise.race(promises).then(valor => {
//     console.log(valor);
// }).catch(e => {
//     console.log(e);//se um erro for capturado as demais promises nao serao executadas
// });

//Promise.resolve

// function baixaPagina() {
//     const emCache = false;//se for false ele baixa a pagina

//     if(emCache) {
//         return Promise.resolve('Pagina em cache');
//     }else {
//         return esperaAi('Baixei a pagina', 3000);
//     }
// }

// baixaPagina().then(dadosPagina => {
//     console.log(dadosPagina);
// }).catch(e => console.log(e));


//Promise.reject
function baixaPagina() {
    const emCache = true;//se for false ele baixa a pagina

    //com o reject posso fazer uma promessa ser rejeitada de cara
    if(emCache) {
        return Promise.reject('Pagina em cache');
    }else {
        return esperaAi('Baixei a pagina', 3000);
    }
}

baixaPagina().then(dadosPagina => {
    console.log(dadosPagina);
}).catch(e => console.log('Erro', e));