type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
//type Pessoa = TemNome | TemIdade | TemSobrenome;

// Intersection type
type Pessoa = TemNome & TemIdade & TemSobrenome;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD; // pega a interseceçao intre o conjunto AB e AC ou sej a A

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Luiz',
  sobrenome: 'Carlos',
};

console.log(pessoa);

// module mode
export { pessoa };
