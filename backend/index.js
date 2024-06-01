const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const app = express();
dotenv.config();

const { connectDb } = require('./db');
const authRouter = require('./routes/auth');
const bookRouter = require('./routes/book');
const borrowRouter = require('./routes/borrow');
const saleRouter = require('./routes/sale');
const userRouter = require('./routes/user');

const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/auth', authRouter);
app.use('/api/books', bookRouter);
app.use('/api/borrows', borrowRouter);
app.use('/api/sales', saleRouter);
app.use('/api/users', userRouter);

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

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