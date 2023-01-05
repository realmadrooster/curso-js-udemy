falaOi();//hoisting -> funçao chamda antes de sua declaraçao

function falaOi() {
    console.log('oi');
}
//first class objects(pode se tratar funçao como dados)

const souUmDado = function() {
    console.log('sou um dado');
};
souUmDado();

function executaFuncao(funcao) {
    console.log('vou executar sua funçao abaixo');
    funcao();
}

executaFuncao(souUmDado);

//Arrow function
//todas as funçoes podem ser tratadas como dados
const funcaoArrow = () => {
    console.log('sou uma arrow function');
};
funcaoArrow();
//setInterval(funcaoArrow, 1000);//executa a funçaoArrow de 1 em 1 segundos

//dentro de um objeto posso ter uma funçao

const obj = {
    falar: function() {
        console.log('Estou falando');
    }
};
obj.falar();
//tambem posso declarar minha funçao dentro do objeto dessa forma

const obj2 = {
    falar() {
        console.log('estou falando...');
    }
}
obj2.falar();