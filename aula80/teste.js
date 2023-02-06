const teste = [1,2,3,4,5];
const [a,b,...c] = teste;
console.log(a,b,c);

const teste2 = {galo:'ganhô',cruzeiro:'perdeu' };

const {galo,cruzeiro} = teste2;
console.log(galo);
console.log(cruzeiro);
