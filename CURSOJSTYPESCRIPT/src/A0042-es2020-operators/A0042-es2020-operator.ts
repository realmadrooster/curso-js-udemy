// Encadeamento opcional e operador de coalescencia nula(null e undefined)
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'o titulo',
  texto: 'o texto',
  //data: new Date(),
};

console.log(documento.data?.toDateString() ?? 'galo nao tem data'); //? -> operador de encadeamento opcional
// ?? -> operador de coalescencia nula
console.log(undefined ?? 'galo nao tem data 2'); //? -> operador de encadeamento opcional
// ?? -> operador de coalescencia nula
console.log(null ?? 'galo nao tem data 3'); //? -> operador de encadeamento opcional
// ?? -> operador de coalescencia nula
console.log(false ?? 'galo nao tem data 4'); //? -> operador de encadeamento opcional
// ?? -> operador de coalescencia nula

// se retornar null ou undefined ele retornara o lado direito da expressao, caso contrario sempre o lado esquerdo
