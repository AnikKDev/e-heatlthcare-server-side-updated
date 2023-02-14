const mongoose = require('mongoose');
const { Schema } = mongoose;

// medicine schema
const medicineSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name required"],
    },
    companyName: {
        type: String,
        required: [true, "Company name required"]
    },
    price: {
        type: String,
        required: [true, "Price is required"],
        min: [0, "Price can not be a negative value"],

    },
    expDate: {
        type: String,
        required: [true, "ExpireDate is required"]
    },
    quantity: {
        type: String,
        min: [1, 'Minimum quantity is 1'],
        enums: ['pcs']
    }
}, {
    timestamps: true
})


// medicine model
const Medicine = mongoose.model('medicine', medicineSchema);

module.exports = Medicine;