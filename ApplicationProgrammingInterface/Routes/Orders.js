const express = require('express');
const { postOrders } = require('../Controllers/OrderControllers');

const router = express.Router();

// Define routes
router.route('/orders').post(postOrders);

module.exports = router;
