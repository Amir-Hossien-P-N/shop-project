const Category = require('../models/categoryModel');

const categoryController = {
  create: (req, res) => {
    Category.create({ title: req.body.title }, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Category added successfully' });
    });
  },

  getAll: (req, res) => {
    Category.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  },

  delete: (req, res) => {
    Category.delete(req.params.id, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Category deleted' });
    });
  }
};

module.exports = categoryController;
