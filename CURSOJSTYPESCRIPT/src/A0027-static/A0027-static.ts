export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00'; //atributos estaticos

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}
  static falaOi(): void {
    console.log('oi');
  }

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  } //factory metod
}
const pessoa1 = new Pessoa('Pinto', 'Junior', 44, '099.099.099-99');
const pessoa2 = Pessoa.criaPessoa('Maria', 'Miranda');

console.log(pessoa1);
console.log(pessoa2);
Pessoa.falaOi(); //chama o metodo estatico
pessoa1.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
//acessamos tudos sem instanciar a classe atraves de metodos e atributos estaticos
