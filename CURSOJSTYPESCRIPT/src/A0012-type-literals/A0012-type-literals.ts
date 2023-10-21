let x = 10; //eslint-disable-line
x = 0b1010;// eslint-disable-line

//sempre devemos fazer a asserçao de um tipo literal com const
const y = 10; //eslint-disable-line
//tipo literal->nao se altera

//let a: 100 = 100; //eslint-disable-line
//-> outra forma de declarar um literal -> subtipo de number -> nao é aconselhavel

let a = 100 as const; //eslint-disable-line
//outra forma de declarar um literal

const pessoa = {//eslint-disable-line
  nome: 'Luiz' as const, //tipo literal
  sobrenome: 'Carlos',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Vermelho'));

// Module mode -> sai do escopo global
export default 1;
