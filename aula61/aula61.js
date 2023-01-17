function* geradora() {
    //codigo qualquer
    yield 'valor 1';
    //codigo qualquer
    yield 'valor 2';
    //codigo qualquer
    yield 'valor 3';
}

const g1 = geradora();

//console.log(g1.next());//retorna o par de chaves value:'valor' e done: false porque ainda nao terminou de executar o numero de vezes especificadas

// console.log(g1.next().value);//retorna valor 1
// console.log(g1.next().value);//retorna valor 2
// console.log(g1.next().value);//retorna valor 3

for (let valor of g1) {
    console.log(valor);
}

function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

//funçao geradora que delega parte de seu serviço para outra funçao geradora

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();//chama a funçao geradora3
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4) {
    console.log(valor);
}

function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    };
    //...

    yield function() {
        console.log('vim do y2');
    };
}
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();