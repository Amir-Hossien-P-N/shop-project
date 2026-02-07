const db = require('../config/db');

const Category = {
 
  create: (data, cb) => db.query('INSERT INTO categories SET ?', data, cb),

  
  getAll: cb => db.query('SELECT * FROM categories', cb),

 
  delete: (id, cb) => db.query('DELETE FROM categories WHERE id=?', [id], cb)
};

module.exports = Category;
