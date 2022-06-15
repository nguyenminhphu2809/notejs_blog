const express = require('express');
const router = express.Router();

const roleController = require('../app/controllers/RoleController');

router.get('/create', roleController.create);
router.post('/store', roleController.store);

module.exports = router;
