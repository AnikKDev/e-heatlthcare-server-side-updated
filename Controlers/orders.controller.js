const Medicine = require("../Models/Medicine");
const { addAnOrderService, getAllOrdersService, updateQuantityAndPriceService, updatePaidService, getAllPaidOrdersService, deleteOrderService } = require("../services/orders.services");
module.exports.addAnOrder = async (req, res, next) => {
    try {
        // console.log(req.body)
        const result = await addAnOrderService(req.body);
        res.status(200).send({
            success: true,
            message: "Order added successfully",
            data: result
        })
    } catch (err) {
        // console.log(err)
        res.status(400).send({
            success: false,
            message: err.message
        })
    }
}

// get all orders
module.exports.getAllOrders = async (req, res, next) => {
    try {
        console.log(req.query)
        const { customerEmail } = req.query;
        const result = await getAllOrdersService(customerEmail);
        res.status(200).send({
            success: true,
            message: "Success",
            data: result
        })

    } catch (err) {
        // console.log(err)
        res.status(400).send({
            success: false,
            message: "Orders rendering failed"
        })
    }
}
// get all paid orders
module.exports.getAllPaidOrders = async (req, res, next) => {
    try {
        const result = await getAllPaidOrdersService();
        res.status(200).send({
            success: true,
            message: "Success",
            data: result
        })

    } catch (err) {
        // console.log(err)
        res.status(400).send({
            success: false,
            message: "Orders rendering failed"
        })
    }
}

module.exports.updateQuantityAndPrice = async (req, res, next) => {
    try {
        const findMedicine = await Medicine.findOne({ name: req.body.name });
        // console.log(req.body, findMedicine)
        const updateQuantity = Number(findMedicine.quantity) - Number(req.body.quantity);
        // console.log(updateQuantity)
        // const result = 'meow'
        const result = await updateQuantityAndPriceService(req.body, updateQuantity);

        res.status(200).send({
            success: true,
            message: "Updated price",
            data: result
        })
    } catch (err) {
        res.status(400).send({
            success: false,
            message: err.message,
        })
    }
}


module.exports.updatePaid = async (req, res, next) => {
    try {
        console.log(req.body)
        const result = await updatePaidService(req.body);

        res.status(200).send({
            success: true,
            message: "Updated price",
            data: result
        })
    } catch (err) {
        // console.log(err)
        res.status(400).send({
            success: false,
            message: err.message,
        })
    }
}

module.exports.deleteOrder = async (req, res, next) => {
    try {
        const result = await deleteOrderService(req.params);

        res.status(200).send({
            success: true,
            message: "Deleted order",
            data: result
        })
    } catch (err) {
        // console.log(err)
        res.status(400).send({
            success: false,
            message: err.message,
        })
    }
}