const express = require('express');

const {
    getBooks,
    addBook,
    updateBook,
    deleteBook,
    getBookById
} = require('../controllers/book');

const router = express.Router();

router.get("/", getBooks);
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);
router.get("/:id", getBookById);

module.exports = router;