const db = require('../config/db');

const Order = {
  
  create: (data, cb) => db.query('INSERT INTO orders SET ?', data, cb),

  
  getAll: cb => db.query('SELECT orders.*, users.email FROM orders JOIN users ON users.id=orders.user_id', cb)
};

module.exports = Order;
