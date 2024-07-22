const express = require('express');
const { Customer } = require('../models');

const router = express.Router();

// Create a customer
router.post('/', async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Other customer routes...

module.exports = router;
