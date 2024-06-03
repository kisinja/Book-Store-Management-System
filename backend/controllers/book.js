const Book = require('../models/Book');

const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        if (!books) {
            res.status(404).json({ message: "No Books Available !!" });
        } else {
            res.json({ message: "Books fetched successfully", "books": books }).status(200);
        }
    } catch (error) {
        console.log(error.message);
        res.json({ message: error.message }).status(500);
    }
};

const addBook = async (req, res) => {
    try {
        const book = await Book.insertMany(req.body);

        if (book) {
            res.json({ message: "Books added successfully", book }).status(201);
        } else {
            res.json({ message: "Books could not be added" }).status(400);
        }
    } catch (error) {
        console.log(error.message);
        res.json({ message: error.message }).status(500);
    }
};

const updateBook = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });

        if (book) {
            res.json({ message: "Book updated successfully", book }).status(200);
        } else {
            res.json({ message: "Book could not be updated" }).status(400);
        }
    } catch (error) {
        console.log(error.message);
        res.json({ message: error.message }).status(500);
    }
};

const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findByIdAndDelete(id);
        res.json({ message: "Book deleted successfully", book }).status(200);
    } catch (error) {
        console.log(error.message);
        res.json({ message: error.message }).status(500);
    }
};

const getBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findById(id);
        if (book) {
            res.json({ book }).status(200);
        } else {
            res.json({ message: "Book not found" }).status(404);
        }
    } catch (error) {
        console.log(error.message);
        res.json({ message: error.message }).status(500);
    }
}

module.exports = {
    getBooks,
    addBook,
    updateBook,
    deleteBook,
    getBookById
};