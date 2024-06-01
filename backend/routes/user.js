const express = require('express');
const User = require('../models/User');

const {register, login} = require('../auth/user');

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;