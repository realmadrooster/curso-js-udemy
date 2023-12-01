// type TipoPessoa = {
//   nome: string;
//   sobrenome: string;
//   nomeCompleto(): string;
//   //nomeCompleto: () => string; //outra forma de montar o metodo
// };
// //quando for implementar um tipo usa-se implements
type TipoPessoa = {
  nome: string;
};

type TipoSobrenome = {
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto: () => string;
};
//posso implementar quantos tipos quiser
export class Pessoa implements TipoPessoa, TipoSobrenome, TipoNomeCompleto {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}
  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Luiz', 'Pinto junior');
console.log(pessoa.nomeCompleto());
