const express = require('express');
const { getProducts, getProductsID } = require('../Controllers/ProductController');

const router = express.Router();

// Define routes
router.route('/products').get(getProducts);
router.route('/products/:id').get(getProductsID);

module.exports = router;
