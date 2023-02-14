const Medicine = require("../Models/Medicine")

module.exports.addMedicineService = async (data) => {
    // console.log(data)
    const result = await Medicine.create(data);
    return result
}

module.exports.getAllMedicineService = async () => {
    const result = await Medicine.find({});
    return result;
}
module.exports.findMedicineDataService = async (id) => {
    const result = await Medicine.findById(id);
    return result;
}
module.exports.updateOneMedicineService = async (id, data) => {
    const result = await Medicine.updateOne({ _id: id }, data);
    return result;
}

module.exports.deleteMedicineService = async (id) => {
    const result = await Medicine.findByIdAndDelete(id.id);
    return result
}