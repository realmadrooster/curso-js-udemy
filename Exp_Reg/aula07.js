const { cpfs2 } = require('./base');

// ^ -> começa com
// $ -> termina com
//[^] -> negaçao
// m -> multiline(checa por linha)

const cpf = '254.224.877-45';
const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;//a minha expressao tem que ser exatamente isso daqui nada antes nada depois
console.log(cpfs2.match(cpfRegExp));