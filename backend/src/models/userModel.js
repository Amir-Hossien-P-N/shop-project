const db = require('../config/db');

const User = {
  
  create: (data, cb) => db.query('INSERT INTO users SET ?', data, cb),

  
  findByEmail: (email, cb) => db.query('SELECT * FROM users WHERE email=?', [email], cb),

  
  findById: (id, cb) => db.query('SELECT * FROM users WHERE id=?', [id], cb),

  
  updateRole: (id, role, cb) => db.query('UPDATE users SET role=? WHERE id=?', [role, id], cb)
};

module.exports = User;
