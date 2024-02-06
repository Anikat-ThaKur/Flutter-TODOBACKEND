const router = require('express').Router();
const UserController = require('../controller/usercontroller');

router.post('/registration',UserController.register);
router.post('/login',UserController.login);

module.exports = router;