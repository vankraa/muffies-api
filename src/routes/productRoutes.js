const express = require('express');
const { Product } = require('../models');

const router = express.Router();

// List products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Other product routes...

module.exports = router;
