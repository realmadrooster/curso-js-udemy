// Record
const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Carlos',
  idade: 44,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required -> transforma tudo oopcional para required
type PessoaRequired = Required<PessoaProtocol>;

//Partial -> torna tudo que era requerido opcional
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type PessoaPartial = Partial<PessoaRequired>;

//Readonly
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type PessoaReadonly = Readonly<PessoaRequired>;

//Pick
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaRequired = {
  nome: 'Luiz',
  sobrenome: 'Carlos',
  idade: 44,
};
console.log(objeto2);

//Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type TipoExclude = Exclude<ABC, CDE>; //computa todos os tipos que estao em ABC que nao estao em CDE
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type TipoAbstract = Extract<ABC, CDE>; //Computa todos os tipos que estao em ABC que podem ser atribuidos para os tipo que estao em CDE

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

// type AccountApi = {
//   id: string;
//   nome: string;
//   idade: number;
// }; ->substituido por

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'asdfdef9898fdf',
  nome: 'Luiz',
  idade: 44,
  sobrenome: 'Carlos',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API:');
console.log(accountApi);

// Module mode
export default 1;
