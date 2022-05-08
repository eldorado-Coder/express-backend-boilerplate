// set router
const express = require('express');

const router = express.Router();

const { register, validateEmail, login } = require('../middleware/authentication');

// endpoints
router.post('/register', validateEmail, register);
router.post('/validateEmail', validateEmail);
router.post('/login', login);

module.exports = router;
