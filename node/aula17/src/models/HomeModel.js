const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String
});//tratamos os dados porque o mongodb somente os armazena a gente tem que tratar e modelar para jogar nele -> mongoose organiza por isso estamos utilizando ele

//criando o modelo
const HomeModel = mongoose.model('Home', HomeSchema);//nome do model = Home e o esquema é HomeSchema

//module.exports = HomeModel;

class Home {

}

module.exports = Home;