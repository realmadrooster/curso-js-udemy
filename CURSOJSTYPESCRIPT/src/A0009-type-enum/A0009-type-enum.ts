enum Cores {
  VERMELHO, // 0 vermelho = 1 ; começa do 1
  AZUL, // 1
  AMARELO, // 2
  //posso setar com os valores que quiser
  ROXO = 'ROXO',
  VERDE = 100,
  PRETO, //AUTOMATICAMENTE PEGA O VALOR SUCESSIVO
}

enum Cores {
  ROSA = 103, // O TS UNE OS VALORES EM UM UNICO ENUM
}

export function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[0]);
console.log(Cores.ROXO);

escolhaCor(Cores.PRETO); // chamada da funçao

// enum -> estrutura de dados nao ordenada
