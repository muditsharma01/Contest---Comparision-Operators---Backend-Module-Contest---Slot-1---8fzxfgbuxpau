const router = require('express').Router();
const User = require('../models/userModel');

// Get values where 'age' is equal to 20
const eq = async (req, res) => {
  try {
    // TODO: Define the logic to find users with 'age' equal to 20
    // TODO: Respond with the found users
  } catch (error) {
    // Handle errors by responding with an appropriate status code and error message
    res.status(404).send(error);
  }
};

// Get values where 'age' is greater than 20
const gt = async (req, res) => {
  try {
    // TODO: Define the logic to find users with 'age' greater than 20
    // TODO: Respond with the found users
  } catch (error) {
    // Handle errors by responding with an appropriate status code and error message
    res.status(404).send(error);
  }
};

// Get values where 'age' is greater than or equal to 20
const gte = async (req, res) => {
  try {
    // TODO: Define the logic to find users with 'age' greater than or equal to 20
    // TODO: Respond with the found users
  } catch (error) {
    // Handle errors by responding with an appropriate status code and error message
    res.status(404).send(error);
  }
};

// Get values where 'age' is less than 20
const lt = async (req, res) => {
  try {
    // TODO: Define the logic to find users with 'age' less than 20
    // TODO: Respond with the found users
  } catch (error) {
    // Handle errors by responding with an appropriate status code and error message
    res.status(404).send(error);
  }
};

// Get values where 'age' is less than or equal to 20
const lte = async (req, res) => {
  try {
    // TODO: Define the logic to find users with 'age' less than or equal to 20
    // TODO: Respond with the found users
  } catch (error) {
    // Handle errors by responding with an appropriate status code and error message
    res.status(404).send(error);
  }
};

// Get values where 'age' includes 20 or 25
const inop = async (req, res) => {
  try {
    // TODO: Define the logic to find users with 'age' including 20 or 25
    // TODO: Respond with the found users
  } catch (error) {
    // Handle errors by responding with an appropriate status code and error message
    res.status(404).send(error);
  }
};

module.exports = { eq, gt, gte, lt, lte, inop };
