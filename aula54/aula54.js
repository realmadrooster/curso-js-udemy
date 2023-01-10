//funçao que gera um numero aleatorio para especificaçao do tempo 
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
//funçao que executa segundo um tempo aleatorio
function f1(callback) {
    setTimeout(function() {
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, rand());
}
//fazendo com que uma funçao chame a outra em uma ordem especifica fazemos que que elas sejam executadas na ordem em que desejamos
// f1(function() {
//     f2(function() {
//         f3(function() {
//             console.log('hello world!');
//         });
//     });    
// });

//o codigo comentado acima foi substituido por outro sem a identaçao
f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('hello world!');
}

