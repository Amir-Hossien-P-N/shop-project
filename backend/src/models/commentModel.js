const db = require('../config/db');

const Comment = {
  
  create: (data, cb) => db.query('INSERT INTO comments SET ?', data, cb),

  
  getByProduct: (product_id, cb) =>
    db.query(
      'SELECT comments.*, users.name FROM comments JOIN users ON users.id=comments.user_id WHERE product_id=?',
      [product_id],
      cb
    )
};

module.exports = Comment;
