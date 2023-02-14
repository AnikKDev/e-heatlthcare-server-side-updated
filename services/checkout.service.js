const CheckOut = require('../Models/CheckOut');


module.exports.addCheckOutService = async (data) => {
    const result = await CheckOut.create(data);
    return result;
}