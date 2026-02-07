const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const auth = require('../middleware/auth');
const isAdmin = require('../middleware/isAdmin');


router.post('/', auth, isAdmin, categoryController.create);


router.get('/', categoryController.getAll);


router.delete('/:id', auth, isAdmin, categoryController.delete);

module.exports = router;
