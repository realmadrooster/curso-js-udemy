export class Empresa {
  public readonly nome: string; //public nao necessario
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

  public getNome(): string {
    return this.nome;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Wejade', '11.111.111/0001-11');
const Colaborador1 = new Colaborador('Luiz', 'Carlos');
const Colaborador2 = new Colaborador('Luiz', 'Pinto');
const Colaborador3 = new Colaborador('Luiz', 'Junior');
console.log(empresa1);
console.log(empresa1.nome);
empresa1.adicionaColaborador(Colaborador1);
empresa1.adicionaColaborador(Colaborador2);
empresa1.adicionaColaborador(Colaborador3);
empresa1.adicionaColaborador({
  nome: 'Pinto',
  sobrenome: 'Junior->jovem forte robusto',
});
console.log(empresa1.getNome(), empresa1.nome);
//empresa1.mostrarColaboradores();
