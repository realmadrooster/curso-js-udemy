export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto() {
    return 'Isso vem do aluno ' + this.nome + ' ' + this.sobrenome;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto() {
    return 'Isso vem do cliente ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Pinto', 'Junior', 44, '099.099.099-99');

const aluno = new Aluno('Luiz', 'Pinto', 44, '099.099.099-99');

const cliente = new Cliente('Luiz', 'Carlos', 44, '099.099.099-90');

console.log(pessoa);
console.log(aluno);
console.log(cliente);
console.log(cliente.getIdade());

console.log(cliente.getNomeCompleto());
console.log(aluno.getNomeCompleto());
