const express = require('express');
const { addCheckout } = require('../Controlers/checkout.controller');

const router = express.Router();
// add medicine
router.route('/add-checkout').put(addCheckout);

module.exports = router;