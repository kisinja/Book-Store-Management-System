const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const app = express();
dotenv.config();

const { connectDb } = require('./db');
const userRouter = require('./routes/user');
const bookRouter = require('./routes/book');
const borrowRouter = require('./routes/borrow');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/auth', userRouter);
app.use('/api/books', bookRouter);
app.use('/api/borrows', borrowRouter);

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

const start_server = () => {
    try {
        connectDb();
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    } catch (error) {
        console.log(error.message);
    }
};

start_server();