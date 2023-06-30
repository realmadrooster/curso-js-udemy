const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: ''},
    email: { type: String, required: false, default: ''},
    telefone: { type: String, required: false, default: ''},
    criadoEm: { type: Date, default: Date.now},
    
});//tratamos os dados porque o mongodb somente os armazena a gente tem que tratar e modelar para jogar nele -> mongoose organiza por isso estamos utilizando ele

//criando o modelo
const ContatoModel = mongoose.model('Contato', ContatoSchema);//nome do model = Home e o esquema é HomeSchema

//module.exports = HomeModel;

function Contato(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;

}



Contato.prototype.register = async function() {
    this.valida();

    if(this.errors.length > 0) return;

    this.contato = await ContatoModel.create(this.body);

};

Contato.prototype.valida = function() {
    this.cleanUp();
    //validaçao
    //o email precisa ser valido
    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail invalido');
    if(!this.body.nome) this.errors.push('Nome é um campo obrigatório.');
    if(!this.body.email && !this.body.telefone) {
        this.errors.push('Pelo menos um contato precisa ser enviado: e-mail ou telefone.');
    } 
  
};

Contato.prototype.cleanUp = function() {
    for(const key in this.body) {
        if(typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }

    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone,
        
    };
}

Contato.prototype.edit = async function(id) {
    if(typeof id !== 'string') return;
    this.valida();
    if(this.errors.length > 0) return;
    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true });
};

//metodos estaticos
Contato.buscaPorId = async function(id) {
    if(typeof id !== 'string') return;
    const contato = await ContatoModel.findById(id);
    return contato;

};

Contato.buscaContatos = async function() {
    
    const contatos = await ContatoModel.find().sort({ criadoEm: -1 });
    // const contatos = await ContatoModel.find();
    return contatos;
    return contatos;

};

Contato.delete = async function(id) {
    if(typeof id !=='string') return;
    const contato = await ContatoModel.findOneAndDelete({_id: id});//enviando o objeto com a chave id e o valor do id => objeto com filtro
    return contato;

};



module.exports = Contato;