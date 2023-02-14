const mongoose = require('mongoose');
const { Schema } = mongoose;

// orders schema
const ordersSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    customerEmail: {
        type: String,
        required: [true, "Email is required"]
    },
    totalPrice: String,
    companyName: {
        type: String
    },
    price: {
        type: String
    },
    quantity: {
        type: String,
        min: [0, "Quantity value can not be null"]
    },
    paid: {
        type: Boolean
    }
    /* totalPrice: {
        type: String
    } */
}, {
    timestamps: true
})

// model
const Orders = mongoose.model('orders', ordersSchema);

module.exports = Orders;