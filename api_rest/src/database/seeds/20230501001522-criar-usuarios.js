const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'People',
    [
      {
        nome: 'Luiz Carlos',
        email: 'luiz13@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Luiz Carlos 14',
        email: 'luiz13@gmail.com',
        password_hash: await bcryptjs.hash('123232', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Luiz Carlos 15',
        email: 'luiz13@gmail.com',
        password_hash: await bcryptjs.hash('2323456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),
  down: () => {},
};
