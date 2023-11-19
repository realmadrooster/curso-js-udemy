export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    console.log('setter chamado');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('getter chamado');
    return this._cpf.replace(/\D/g, '');
  }
}
const pessoa = new Pessoa('Pinto', 'Junior', 44, '099.099.099-99');
pessoa.cpf = '123.557.789-99'; // setando o cpf -> acessando o metodo
console.log(pessoa.cpf);
