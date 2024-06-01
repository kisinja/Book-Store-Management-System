const Sale = require('../models/Sale');

const createSale = async (req, res) => {
    try {
        const { book, customer, price, quantity } = req.body;

        const sale = await Sale.create({
            book,
            customer,
            price,
            quantity
        });

        if (sale) {
            res.status(201).json(sale);
        } else {
            res.status(400);
            throw new Error("Invalid sale data");
        }

        res.json(sale);
    } catch (error) {
        console.log(error.message);
        res.json({ message: error.message }).status(500);
    }
};

const getSales = async (req, res) => {
    try {
        const sales = await Sale.find({}).populate("book").populate("customer");
        if (sales) {
            res.json(sales).status(200);
        } else {
            res.status(404);
            throw new Error("Sales not found");
        }
    } catch (error) {
        console.log(error.message);
        res.json({ message: error.message }).status(500);
    }
};

const getSaleById = async (req, res) => {
    try {
        const sale = await Sale.findById(req.params.id).populate("book").populate("customer");
        if (sale) {
            res.json(sale).status(200);
        } else {
            res.status(404);
            throw new Error("Sale not found");
        }
    } catch (error) {
        console.log(error.message);
        res.json({ message: error.message }).status(500);
    }
};

const updateSale = async (req, res) => {
    try {
        const { book, customer, price, quantity } = req.body;
        const sale = await Sale.findById(req.params.id);

        if (sale) {
            sale.book = book;
            sale.customer = customer;
            sale.price = price;
            sale.quantity = quantity;

            const updatedSale = await sale.save();
            res.json(updatedSale).status(200);
        } else {
            res.status(404);
            throw new Error("Sale not found");
        }
    } catch (error) {
        console.log(error.message);
        res.json({ message: error.message }).status(500);
    }
};

const deleteSale = async (req, res) => {
    try {
        const sale = await Sale.findById(req.params.id);
        if (sale) {
            await sale.remove();
            res.json({ message: "Sale removed" }).status(200);
        } else {
            res.status(404);
            throw new Error("Sale not found");
        }
    } catch (error) {
        console.log(error.message);
        res.json({ message: error.message }).status(500);
    }
};

module.exports = { createSale, getSales, getSaleById, updateSale, deleteSale };