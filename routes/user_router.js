const UserController = require('../controller/register_controller');

const express = require('express');

const router = express.Router();

//POST USER
router.post('/register', UserController.register);

// GET USER
router.get('/get_users', UserController.getUser)

module.exports = router;