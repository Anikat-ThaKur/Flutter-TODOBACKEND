const router = require('express').Router();
const todoController = require('../controller/todocontroller');

router.post('/storetodo',todoController.createtodo);
router.get('/getusertodo',todoController.getusertodo);

module.exports=router;
