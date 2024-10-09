const express = require('express');
const router = express.Router();

const registerController = require('../controller/RegisterController');
const loginController = require('../controller/LoginController');
const {validateRegister, validateLogin} = require('../utils/validators/auth');

router.post('/register', validateRegister, registerController.register);
router.post('/login', validateLogin, loginController.login);

module.exports = router;