module.exports = {
  up: (QueryInterface, Sequelize) => QueryInterface.changeColumn(
    'alunos',
    'email',
    {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  ),
  down: () => {},
};
