import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Luiz',
      sobrenome: 'Pinto',
      email: 'pinto@gmail.com',
      idade: 113,
      peso: 102,
      altura: 1.7,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
