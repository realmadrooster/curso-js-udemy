// eslint-disable-next-line @typescript-eslint/no-explicit-any
function inverteNomeECor<T extends new (...args: any[]) => any>(target: T) {
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
      return valor.split('').reverse().join('');
    }
  };
}

@inverteNomeECor //decorator de class
export class Animal {
  constructor(
    public nome: string,
    public cor: string,
  ) {
    console.log('sou a classe');
  }
}

const animal = new Animal('Atleticano', 'roxo');
console.log(animal);
