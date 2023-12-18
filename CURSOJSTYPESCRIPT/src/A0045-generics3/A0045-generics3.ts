interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Luiz',
  sobrenome: 'CArlos',
  idade: 30,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 1313,
  sobrenome: 3131,
  idade: 30,
};

const aluno3: PessoaProtocolo2 = {
  nome: 'Luiz',
  sobrenome: 'Pinto Junior',
  idade: 30,
};

console.log(aluno1, aluno2, aluno3);
