const express = require('express');
const router = express.Router();
const { getUserById, updateUser, deleteUser, getUsers } = require('../controllers/user');


router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;