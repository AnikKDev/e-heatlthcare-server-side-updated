const { addCheckOutService } = require("../services/checkout.service");


// add checkout
module.exports.addCheckout = async (req, res, next) => {
    try {
        // console.log(req.body)
        const result = await addCheckOutService(req.body);
        res.status(200).send({
            success: true,
            message: "Added to checkout successfully",
            data: result
        })
    } catch (err) {
        console.log(err)
        res.status(400).send({

            success: false,
            message: "Couldn't add to checkout"
        })
    }
}
