const controller = require('../controllers/user');
const router = require('express').Router();

// CRUD Routes /users
router.get('/', controller.getUsers);
router.get('/:userId', controller.getUser);
router.post('/', controller.createUser);
router.put('/:userId', controller.updateUser);
router.delete('/:userId', controller.deleteUser);

