const express = require('express');

const {
    getBooks,
    addBook,
    updateBook,
    deleteBook
} = require('../controllers/book');

const router = express.Router();

router.get("/", getBooks);
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;