/*eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var MeuNameSpace;
(function (MeuNameSpace) {
    MeuNameSpace.nomeDoNameSpace = 'Luiz';
    var PessoaDoNameSpace = /** @class */ (function () {
        function PessoaDoNameSpace(nome) {
            this.nome = nome;
        }
        return PessoaDoNameSpace;
    }());
    MeuNameSpace.PessoaDoNameSpace = PessoaDoNameSpace;
    var pessoaDoNamespace = new PessoaDoNameSpace('Luiz');
    console.log(pessoaDoNamespace);
    var OutroNameSpace;
    (function (OutroNameSpace) {
        OutroNameSpace.nomeDoNameSpace = 'Carlos Pinto Junior';
    })(OutroNameSpace = MeuNameSpace.OutroNameSpace || (MeuNameSpace.OutroNameSpace = {}));
})(MeuNameSpace || (MeuNameSpace = {}));
// const pessoaDoNamespace = new MeuNameSpace.PessoaDoNameSpace('Carlos');
// console.log(pessoaDoNamespace);
// console.log(MeuNameSpace.nomeDoNameSpace);
// console.log(MeuNameSpace.OutroNameSpace.nomeDoNameSpace);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var constDoNamespace = 'valor da const do namespace';
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="module.ts" />
console.log(MeuNameSpace.nomeDoNameSpace);
console.log(constDoNamespace);
