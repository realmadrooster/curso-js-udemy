type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;
// type CoresObj = {
//   vermelho: string;
//   verde: string;
//   azul: string;
// };

// const coresObj: CoresObj = {
//   vermelho: 'red',
//   verde: 'green',
//   azul: 'blue',
// };

// const coresObj: CoresObj= {
//   vermelho: 'red',
//   verde: 'green',
//   azul: 'blue',
// };

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

// function traduzirCor(cor: 'vermelho' | 'verde' | 'azul', cores: CoresObj) {
//   return cores[cor];
// }

// //usando typeof
// function traduzirCor(
//   cor: 'vermelho' | 'verde' | 'azul',
//   cores: typeof coresObj,
// ) {
//   return cores[cor];
// }

// //usando typeof
// function traduzirCor(cor: 'vermelho' | 'verde' | 'azul', cores: CoresObj) {
//   return cores[cor];
// }

//usando keyof
function traduzirCor(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzirCor('vermelho', coresObj));
console.log(traduzirCor('verde', coresObj));
console.log(traduzirCor('azul', coresObj));
console.log(traduzirCor('roxo', coresObj));
