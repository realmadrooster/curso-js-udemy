function cantaHino1(callback) {
    setTimeout(function() {
        console.log('galo');
        if (callback) callback();
    }, 1000);
}

function cantaHino2(callback) {
    setTimeout(function() {
        console.log('forte');
        if (callback) callback();
    },500);
}

function cantaHino3(callback) {
    setTimeout(function() {
        console.log('vingador');
        if (callback) callback();
    },2000);
}

cantaHino1(cantaHino1Callback);

function cantaHino1Callback() {
    cantaHino2(cantaHino2Callback);
}

function cantaHino2Callback() {
    cantaHino3(cantaHino3Callback);
}

function cantaHino3Callback() {
    console.log('Uma vez até morrer');
}

// cantaHino1();
// cantaHino2();
// cantaHino3();