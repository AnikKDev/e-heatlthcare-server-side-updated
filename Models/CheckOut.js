const mongoose = require('mongoose');
const { Schema } = require('mongoose');

// declare schema
const checkoutSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    mobile: {
        type: String,
        required: [true, "Phone is required"]
    },
    // email must need to be unique. do it!!!
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    state: {
        type: String,
        required: [true, "State is required"]
    },
    city: {
        type: String,
        required: [true, "City is required"]
    },
    paid: {
        type: Boolean,
    },
    totalPrice: {
        type: String,
        min: [0, "Price must need to be valid integer"],
        required: [true, "Total price is required"]
    },
    address1: {
        type: String,
        required: [true, "Address is required"]
    }
})


// model
const CheckOut = mongoose.model("CheckOut", checkoutSchema);

module.exports = CheckOut;