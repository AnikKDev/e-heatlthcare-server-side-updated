const Medicine = require('../Models/Medicine');
const Orders = require('../Models/Orders');

module.exports.addAnOrderService = async (data) => {
    /* const getMedicine = await Medicine.findById({ _id: data._id });
    console.log(data.quantity) */
    // const newQuanaity = Number(getMedicine.quantity) - Number(data.quantity);
    // const updateMedicine = await Medicine.updateOne({ name: getMedicine.name }, { quantity: newQuanaity });
    // console.log()
    // console.log(data)
    const result = await Orders.create(data);
    return result
}

// get all orders
module.exports.getAllOrdersService = async (email) => {
    const result = await Orders.find({ paid: false, customerEmail: email });
    // console.log(result)
    return result;
}
// get all paid orders
module.exports.getAllPaidOrdersService = async () => {
    const result = await Orders.find({ paid: true });
    return result;
}

module.exports.updateQuantityAndPriceService = async (data, updateQuantity) => {
    // const result = await 
    // console.log(data.total)
    const updateMeicineQuantity = await Medicine.updateOne({ name: data.name }, { quantity: updateQuantity });
    console.log(data)
    const updateOrderPrice = await Orders.updateOne({ name: data.name }, { totalPrice: data.total, quantity: data.quantity });

    return updateOrderPrice;

}


module.exports.updatePaidService = async (data) => {
    const result = await Orders.updateMany({ _id: data.ids }, { paid: data.paid });
    return result
    // const updateOrderPrice = await Orders.updateOne({ name: data.name }, { price: data.total });

    return updateOrderPrice;

}
module.exports.deleteOrderService = async (id) => {
    const result = await Orders.findByIdAndDelete(id.id);
    return result
}