const express = require('express');
const { addAnOrder, getAllOrders, updateQuantityAndPrice, updatePaid, getAllPaidOrders, deleteOrder } = require('../Controlers/orders.controller');
const router = express.Router();
// add medicine
router.route('/')
    .post(addAnOrder)
    .get(getAllOrders)
    .patch(updateQuantityAndPrice);

router.route('/paid').patch(updatePaid)
router.route('/paid-orders').get(getAllPaidOrders)
router.route('/:id').delete(deleteOrder)




module.exports = router;