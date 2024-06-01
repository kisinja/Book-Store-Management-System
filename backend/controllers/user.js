const User = require('../models/User');

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (user) {
            res.json(user).status(200);
        } else {
            res.status(404);
            throw new Error("User not found");
        }
    } catch (error) {
        console.log(error.message);
        res.json({ message: error.message }).status(500);
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find({}).select('-password');
        if (!users) {
            res.status(404).json({ message: "No Users Available !!" });
        } else {
            res.json({ message: "Users fetched successfully", "users": users }).status(200);
        }
    } catch (error) {
        console.log(error.message);
        res.json({ message: error.message }).status(500);
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id, {
            $set: req.body
        }, { new: true });
        if (user) {
            res.json({ message: "User updated successfully", user }).status(200);
        } else {
            res.json({ message: "User could not be updated" }).status(400);
        }
    } catch (error) {
        console.log(error.message);
        res.json({ message: error.message }).status(500);
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted successfully", user }).status(200);
    } catch (error) {
        console.log(error.message);
        res.json({ message: error.message }).status(500);
    }
};

module.exports = { getUserById, updateUser, deleteUser, getUsers }
