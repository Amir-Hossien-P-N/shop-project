const db = require('../config/db');

const Product = {
  
  create: (data, cb) => db.query('INSERT INTO products SET ?', data, cb),

 
  getAll: cb => db.query('SELECT * FROM products', cb),

  
  getById: (id, cb) => db.query('SELECT * FROM products WHERE id=?', [id], cb),

  
  search: (key, cb) => db.query('SELECT * FROM products WHERE title LIKE ?', [`%${key}%`], cb),

  
  update: (id, data, cb) => db.query('UPDATE products SET ? WHERE id=?', [data, id], cb),

  
  delete: (id, cb) => db.query('DELETE FROM products WHERE id=?', [id], cb)
};

module.exports = Product;
