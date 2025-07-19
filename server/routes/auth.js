// server/routes/auth.js

const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Make sure this path is correct
const bcrypt = require('bcrypt');

// SIGNUP ROUTE
router.post('/signup', async (req, res) => {
    const { name, email, phone, password } = req.body;

    try {
        // Check if user already exists
        const existing = await User.findOne({ email });
        if (existing) {
            return res.send({ success: false, message: "User already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create and save the new user with the hashed password
        const user = new User({ name, email, phone, password: hashedPassword });
        await user.save();

        res.send({ success: true });

    } catch (err) {
        console.error("Signup error:", err);
        res.send({ success: false, message: "Server error" });
    }
});

// LOGIN ROUTE
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.send({ success: false, message: "User not found" });
        }

        // Compare the provided password with the hashed password in the database
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.send({ success: false, message: "Incorrect password" });
        }

        res.send({ success: true, userEmail: user.email }); // optionally return user data

    } catch (err) {
        console.error("Login error:", err);
        res.send({ success: false, message: "Server error" });
    }
});

module.exports = router;