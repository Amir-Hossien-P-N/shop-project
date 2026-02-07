const Comment = require('../models/commentModel');

const commentController = {
  create: (req, res) => {
    const { product_id, text } = req.body;
    Comment.create({ user_id: req.user.id, product_id, text }, (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Comment added' });
    });
  },

  getByProduct: (req, res) => {
    Comment.getByProduct(req.params.id, (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  }
};

module.exports = commentController;
