/*eslint-disable @typescript-eslint/no-namespace */
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

const pessoaDoNamespace = new MeuNameSpace.PessoaDoNameSpace('Carlos');
console.log(pessoaDoNamespace);
console.log(MeuNameSpace.nomeDoNameSpace);
console.log(MeuNameSpace.OutroNameSpace.nomeDoNameSpace);

export default 1;
