const objetoA: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string; //chave opcional
  [key: string]: unknown; //posso criar qualquer tipo -> index signature
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

//objetoA.chaveA = 'nao pode ser alterado pois e readonly'
objetoA.chaveB = 'nova chave';
objetoA.chaveD = 'nova chave'; //permitido pela chave unknown

console.log(objetoA);
