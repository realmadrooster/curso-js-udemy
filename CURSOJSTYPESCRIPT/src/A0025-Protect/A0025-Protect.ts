export class Empresa {
  public readonly nome: string; //public nao necessario
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

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

export class Wejade extends Empresa {
  constructor() {
    super('Wejade', '11.111.111/0001-11');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Wejade();
const Colaborador1 = new Colaborador('Luiz', 'Carlos');
const Colaborador2 = new Colaborador('Luiz', 'Pinto');
const Colaborador3 = new Colaborador('Luiz', 'Junior');
empresa1.adicionaColaborador(Colaborador1);
empresa1.adicionaColaborador(Colaborador2);
empresa1.adicionaColaborador(Colaborador3);

const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
console.log(empresa1);
//empresa1.mostrarColaboradores();
