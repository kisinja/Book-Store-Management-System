const express = require('express');
const {
    getBorrows,
    addBorrows,
    updateBorrow,
    deleteBorrow
} = require('../controllers/borrow');

const router = express.Router();

router.get("/", getBorrows);
router.post("/", addBorrows);
router.put("/:id", updateBorrow);
router.delete("/:id", deleteBorrow);

module.exports = router;