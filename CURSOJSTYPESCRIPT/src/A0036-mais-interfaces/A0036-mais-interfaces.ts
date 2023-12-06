//declaration mergin
interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
} //readonly no array de string nao permite que eu o altere se retirar nao modifico a propriedade e sim o array

interface Pessoa {
  readonly idade?: number; //? define a propriedade como opcional e pode ser undefined
}

const pessoa1: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Pinto junior',
  enderecos: ['rua, miguel maura'],
  idade: 44,
};

console.log(pessoa1);
