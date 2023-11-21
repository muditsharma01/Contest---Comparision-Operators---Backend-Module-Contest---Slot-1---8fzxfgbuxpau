const router = require('express').Router();
const User = require('../models/userModel');

// Get values where 'age' is equal to 20
const eq = async (req, res) => {
  try {
    const users = await User.find({ age: 20 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get values where 'age' is greater than 20
const gt = async (req, res) => {
  try {
    const users = await User.find({ age: { $gt: 20 } });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get values where 'age' is greater than or equal to 20
const gte = async (req, res) => {
  try {
    const users = await User.find({ age: { $gte: 20 } });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get values where 'age' is less than 20
const lt = async (req, res) => {
  try {
    const users = await User.find({ age: { $lt: 20 } });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get values where 'age' is less than or equal to 20
const lte = async (req, res) => {
  try {
    const users = await User.find({ age: { $lte: 20 } });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get values where 'age' includes 20 or 25
const inop = async (req, res) => {
  try {
    const users = await User.find({ age: { $in: [20, 25] } });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { eq, gt, gte, lt, lte, inop };
