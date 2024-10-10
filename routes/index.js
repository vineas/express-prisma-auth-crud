const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/auth');
const registerController = require('../controller/RegisterController');
const loginController = require('../controller/LoginController');
const userController = require('../controller/UserController');
const {validateRegister, validateLogin} = require('../utils/validators/auth');
const { validateUser } = require('../utils/validators/user');


router.post('/register', validateRegister, registerController.register);
router.post('/login', validateLogin, loginController.login);
router.get('/admin/users', verifyToken, userController.findUsers );
router.post('/admin/users', verifyToken, validateUser, userController.createUsers)
router.get('/admin/users/:id', verifyToken, userController.findUserbyId)
router.put('/admin/users/:id', verifyToken, validateUser, userController.updateUser);
router.delete('/admin/users/:id', verifyToken, userController.deleteUser);

module.exports = router;