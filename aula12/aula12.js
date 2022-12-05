let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
let aux = '';

/*funciona
aux = varA;
varA = varB;
varB = varC;
varC = aux;
*/

//outro jeito de resolver

[varA,varB,varC]=[varB,varC,varA];

console.log(varA,varB,varC);
