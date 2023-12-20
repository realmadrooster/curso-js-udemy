type ObterChaveFn = <O, k extends keyof O>(objeto: O, chave: k) => O[k];
// extends representa uma restriçao para k que sera uma chave para O
const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'rosa',
  vacinas: ['vacina1', 'vacina2'],
  idade: 10,
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');

console.log(vacinas, cor, obterChave(animal, 'idade'));
