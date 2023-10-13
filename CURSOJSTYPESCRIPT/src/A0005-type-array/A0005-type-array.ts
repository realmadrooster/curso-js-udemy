// Array<T> -T[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toupperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(3, 4, 5);
const concatenacao = concatenaString('a', 'b', 'c');
const upper = toupperCase('g', 'a', 'l', 'o');

console.log(result);
console.log(concatenacao);
console.log(upper);
