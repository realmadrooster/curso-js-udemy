/*eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace MeuNameSpace {
  export const nomeDoNameSpace = 'Luiz';

  export class PessoaDoNameSpace {
    constructor(public nome: string) {}
  }

  const pessoaDoNamespace = new PessoaDoNameSpace('Luiz');
  console.log(pessoaDoNamespace);

  export namespace OutroNameSpace {
    export const nomeDoNameSpace = 'Carlos Pinto Junior';
  }
}

// const pessoaDoNamespace = new MeuNameSpace.PessoaDoNameSpace('Carlos');
// console.log(pessoaDoNamespace);
// console.log(MeuNameSpace.nomeDoNameSpace);
// console.log(MeuNameSpace.OutroNameSpace.nomeDoNameSpace);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const constDoNamespace = 'valor da const do namespace';
