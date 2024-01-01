// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor = new (...args: any[]) => any;

function inverteNomeECor(param1: string, param2: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, prettier/prettier
  return function (target: Constructor) {
    console.log('sou o decorador e recebi', target);

    return class extends target {
      cor: string;
      nome: string;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(valor: string): string {
        return (
          valor.split('').reverse().join('') + ' ' + param1 + ' ' + ' ' + param2
        );
      }
    };
  };
}

function outroDecorador(param1: string) {
  return function (target: Constructor) {
    console.log('sou o outro decorador ' + param1);
    return target;
  };
}
//decorator factories(decorador com parametros)
@outroDecorador('o parametro do outro decorador')
@inverteNomeECor('valor1', 'valor2')
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {
    console.log('sou a classe');
  }
}

const animal = new Animal('luiz', 'Pinto');
console.log(animal);
