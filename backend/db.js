const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
            .then(() => console.log("Database connected successfully!"))
            .catch((err) => console.log(err));
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = { connectDb };