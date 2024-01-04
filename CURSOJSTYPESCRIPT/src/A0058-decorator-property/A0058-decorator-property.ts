// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
function decorador(classPrototype: any, nome: string): any {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let valorPropriedade: any;
  return {
    get: () => valorPropriedade,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    set: (valor: any) => {
      if (typeof valor === 'string') {
        valorPropriedade = valor.split('').reverse().join(''); //com a checagem posso decorar qualquer coisa que nao e uma string
        return; //usado para parar o seter senao nao aplica a inversao acima
      }
      valorPropriedade = valor;
    },
  };
}

export class UmaPessoa {
  @decorador
  nome: string;
  @decorador
  sobrenome: string;
  @decorador
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ` ` + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('Luiz', 'Carlos', 44);
const metodo = pessoa.metodo(
  'Olá mundo, preparado pra ser dominado pelo galão 2024?',
);
console.log(metodo);
