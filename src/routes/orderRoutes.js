const express = require('express');
const router = express.Router();
const { Order, OrderItem, Product, Customer } = require('../models');

// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        { model: Customer, attributes: ['name', 'email'] },
        { model: OrderItem, include: [Product] }
      ]
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new order
router.post('/', async (req, res) => {
  const { customer_id, total_amount, deliver_by, deliver_to, status, items } = req.body;
  try {
    const order = await Order.create({
      customer_id,
      total_amount,
      deliver_by,
      deliver_to,
      status
    });

    for (const item of items) {
      await OrderItem.create({
        order_id: order.order_id,
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.price
      });
    }

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
