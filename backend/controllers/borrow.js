const Borrow = require('../models/Borrow');

const getBorrows = async (req, res) => {
    try {
        const borrows = await Borrow.find({}).populate("book").populate("customer");
        if (!borrows) {
            res.status(404).json({ message: "No Borrows Available !!" });
        } else {
            res.json({ message: "Borrows fetched successfully", "borrows": borrows }).status(200);
        }
    } catch (error) {
        console.log(error.message);
        res.json({ message: error.message }).status(500);
    }
};

const addBorrows = async (req, res) => {
    try {
        const borrows = await Borrow.create(req.body);

        if (borrows) {
            res.json({ message: "Borrows added successfully", borrows }).status(201);
        } else {
            res.json({ message: "Borrows could not be added" }).status(400);
        }
    } catch (error) {
        console.log(error.message);
        res.json({ message: error.message }).status(500);
    }
};

const updateBorrow = async (req, res) => {
    const { id } = req.params;
    try {
        const borrow = await Borrow.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true });

        if (borrow) {
            res.json({ message: "Borrow updated successfully", borrow }).status(200);
        } else {
            res.json({ message: "Borrow could not be updated" }).status(400);
        }
    } catch (error) {
        console.log(error.message);
        res.json({ message: error.message }).status(500);
    }
};

const deleteBorrow = async (req, res) => {
    const { id } = req.params;
    try {
        const borrow = await Borrow.findByIdAndDelete(id);
        res.json({ message: "Borrow deleted successfully", borrow }).status(200);
    } catch (error) {
        console.log(error.message);
        res.json({ message: error.message }).status(500);
    }
};

module.exports = {
    getBorrows,
    addBorrows,
    updateBorrow,
    deleteBorrow
};