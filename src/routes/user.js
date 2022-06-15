const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

router.post('/add_user', userController.add_user);
router.get('/create', userController.create);
router.get('/', userController.home);

module.exports = router;
