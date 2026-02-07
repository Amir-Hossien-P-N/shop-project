const Product = require('../models/productModel');

const productController = {
  create: (req, res) => {
    Product.create(req.body, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Product added' });
    });
  },

  getAll: (req, res) => {
    Product.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  },

  getById: (req, res) => {
    Product.getById(req.params.id, (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results[0]);
    });
  },

  search: (req, res) => {
    Product.search(req.params.key, (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  },

  update: (req, res) => {
    Product.update(req.params.id, req.body, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Product updated' });
    });
  },

  delete: (req, res) => {
    Product.delete(req.params.id, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Product deleted' });
    });
  }
};

module.exports = productController;
