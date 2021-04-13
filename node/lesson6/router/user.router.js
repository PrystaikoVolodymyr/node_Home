const router = require('express').Router();
const { userController } = require('../controller');
const { userMiddleware } = require('../middleware');

router.get('/', userController.getAllUsers);
router.get('/:userId', userMiddleware.checkIsIdValid, userController.getOneUser);
// router.get('/:userId', userController.getOneUser);
router.delete('/:userId', userMiddleware.checkIsIdValid, userController.deleteOneUser);
// router.delete('/:userId', userController.deleteOneUser);
router.post('/', userController.createUser);

module.exports = router;
