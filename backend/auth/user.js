const User = require('../models/User');
const jwt = require('jsonwebtoken');

const {generateToken} = require('../utils/generateToken');

const register = async (req, res) => {

    const { username, password, email } = req.body;

    if (!username || !password || !email) return res.json({ message: "Please enter all fields required to register" }).status(400);

    try {
        const user = await User.create({
            username,
            password,
            email
        });

        if (user) {
            res.json({ message: "User created successfully", "user": user }).status(201);
        } else {
            res.json({ message: "User creation failed" }).status(400);
        }
    } catch (error) {
        console.log(error.message);
        res.json({ message: error.message }).status(500);
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) return res.json({ message: "Please enter all fields required to login" }).status(400);


    try {
        const user = await User.findOne({ username });
        if (user && (await user.comparePassword(password))) {
            generateToken(res, user._id);
            res.json({ message: "Login successful", "user": user }).status(200);
        } else {
            res.json({ message: "Invalid credentials" }).status(401);
        }
    } catch (error) {
        console.log(error.message);
        res.json({ message: error.message }).status(500);
    }
}

module.exports = {
    register,
    login
}