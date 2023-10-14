//tipo tuple
const dadosCliente1: [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Carlos'];
const dadosCliente3: [number, string, string?] = [1, 'Luiz', 'Carlos']; //? indica que e opcional
const dadosCliente4: [number, string, ...string[]] = [
  1,
  'Luiz',
  'Pinto Junior',
];

//dadosCliente1.pop(); //comportamente indesejado que pode ser evitado com a opçao readonly

dadosCliente1[0] = 13; //posso mudar as tuplas no ts
dadosCliente2[1] = 'Carlos';
dadosCliente3[2] = 'Pinto';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

//readonly array
const array1: readonly string[] = ['Luiz', 'Junior']; //array imutavel
const array2: ReadonlyArray<string> = ['Luiz', 'Pinto'];

console.log(array1);
console.log(array2);
