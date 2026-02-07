const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authController = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      User.create({ name, email, password: hashedPassword }, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'User registered successfully' });
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  login: (req, res) => {
    const { email, password } = req.body;

    User.findByEmail(email, async (err, results) => {
      if (err) return res.status(500).json({ error: err });
      if (!results.length) return res.status(404).json({ error: 'User not found' });

      const user = results[0];
      const match = await bcrypt.compare(password, user.password);
      if (!match) return res.status(401).json({ error: 'Wrong password' });

      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '7d'
      });

      res.json({ token, role: user.role });
    });
  }
};

module.exports = authController;
