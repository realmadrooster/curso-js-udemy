function decorador(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classPrototype: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  nomeMetodo: any,
  index: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(index);
  return 'qualquer coisa';
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(
    @decorador nome: string,
    @decorador sobrenome: string,
    @decorador idade: number,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(@decorador msg: string): string {
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
