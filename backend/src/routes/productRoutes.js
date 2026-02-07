const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/auth');
const isAdmin = require('../middleware/isAdmin');


router.post('/', auth, isAdmin, productController.create);


router.get('/', productController.getAll);


router.get('/:id', productController.getById);


router.get('/search/:key', productController.search);


router.put('/:id', auth, isAdmin, productController.update);


router.delete('/:id', auth, isAdmin, productController.delete);

module.exports = router;
