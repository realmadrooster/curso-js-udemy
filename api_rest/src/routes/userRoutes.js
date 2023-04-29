import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', userController.store);
router.get('/', loginRequired, userController.index);// lista usuario -> nao deveria existir
router.get('/:id', userController.show);// lista usuarios -> nao deveria existir
router.put('/', loginRequired, userController.update);// deve-se retirar o id
router.delete('/', loginRequired, userController.delete);// deve-se retirar o id

export default router;

/*
podemos ter no maximo 5 metodos
como padrao
index -> lista todos os usuarios -> GET
store/create -> cria um novo usuario -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PATCH ou PUT
*/
