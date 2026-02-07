const Order = require('../models/orderModel');

const orderController = {
  create: (req, res) => {
    const { total_price } = req.body;
    Order.create({ user_id: req.user.id, total_price, status: 'paid' }, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Order created successfully' });
    });
  },

  getAll: (req, res) => {
    Order.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  }
};

module.exports = orderController;
