// server/routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// SIGNUP ROUTE
router.post('/signup', async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    const existing = await User.findOne({ email });
    if (existing) {
      return res.send({ success: false, message: "User already exists" });
    }

    const user = new User({ name, email, phone, password });
    await user.save();

    res.send({ success: true });
  } catch (err) {
    console.error('Signup error:', err);
    res.send({ success: false, message: "Server error" });
  }
});

// LOGIN ROUTE
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.send({ success: false, message: "User not found" });
    }

    if (user.password !== password) {
      return res.send({ success: false, message: "Incorrect password" });
    }

    res.send({ success: true, userEmail: user.email }); // optionally return user data
  } catch (err) {
    console.error('Login error:', err);
    res.send({ success: false, message: "Server error" });
  }
});

module.exports = router;
