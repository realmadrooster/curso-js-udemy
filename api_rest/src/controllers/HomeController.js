import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Luiz',
      sobrenome: 'Carlos',
      email: 'luiz@gmail.com',
      idade: 3000,
      peso: 102,
      altura: 1.8,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
