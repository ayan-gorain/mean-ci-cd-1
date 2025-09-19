const router = require('express').Router();
const User = require('../models/user.model');

// SIGNUP
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json('Username and password are required.');
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json('User already exists.');
    }

    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json('User created!');
  } catch (err) {
    res.status(500).json('Error: ' + err.message);
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json('Username and password are required.');
  }

  try {
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(400).json('Invalid credentials.');
    }

    res.status(200).json('Login successful!');
  } catch (err) {
    res.status(500).json('Error: ' + err.message);
  }
});

module.exports = router;
