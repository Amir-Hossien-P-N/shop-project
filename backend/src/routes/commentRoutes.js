const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middleware/auth');


router.post('/', auth, commentController.create);


router.get('/:id', commentController.getByProduct);

module.exports = router;
