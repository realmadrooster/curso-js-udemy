// Encontra todas as palavras
const palavrasRegex = /([wA-ú]+)/gi // pega tudo ate as acentuadas

//somente numeros
const naoNumerosRegEx = /\D/

// valida ip
const ipRegExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// valida cpf -> checa somente se o usuario digitou algo que tem o formato de um cpf nao é uma validaçao 
const cpfRegExp = /(?: \d{3}\.){2}\d{3}-\d{2}/g

// valida telefone
const validaTelefone = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/g

//valida senhas -> fortespega letras minusculas maiusculas sequencia de caracteres especiais para senhas de no minimo 8 digitos
const validaSenhasFortes = /^([a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\])]).{8,}/g

//valida email

const validaEmailPermissiva =/[^\s]+@[^\s]*\.[^\s]+(\w+)*/ //pega alguns emails invalidos tambem

const validaEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g //valida qualquer email