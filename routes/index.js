const express = require('express');
const router = express.Router();

const verifyToken = require('../middleware/auth');
const registerController = require('../controller/RegisterController');
const loginController = require('../controller/LoginController');
const userController = require('../controller/UserController');
const {validateRegister, validateLogin} = require('../utils/validators/auth');


router.post('/register', validateRegister, registerController.register);
router.post('/login', validateLogin, loginController.login);
router.get('/admin/users', verifyToken, userController.findUsers );

module.exports = router;