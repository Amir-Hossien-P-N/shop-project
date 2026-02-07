const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const auth = require('../middleware/auth');
const isAdmin = require('../middleware/isAdmin');


router.post('/', auth, orderController.create);


router.get('/', auth, isAdmin, orderController.getAll);

module.exports = router;
