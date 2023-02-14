const Medicine = require("../Models/Medicine");
const { addMedicineService, getAllMedicineService, findMedicineDataService, updateOneMedicineService, deleteMedicineService } = require("../services/medicine.services")

// add medicine
module.exports.addMedicine = async (req, res, next) => {
    try {
        const result = await addMedicineService(req.body);
        res.status(200).send({
            success: true,
            message: "Added medicine successfully",
            data: result
        })
    } catch (err) {
        res.status(400).send({
            success: false,
            message: "Couldn't add medicine"
        })
    }
}

module.exports.getAllMedicine = async (req, res, next) => {
    try {
        const result = await getAllMedicineService(req.params.id);
        res.status(200).send({
            success: true,
            message: `Total medicine found ${result.length}`,
            data: result
        })
    } catch (err) {
        res.status(400).send({
            success: false,
            message: "Couldn't find medicine"
        })
    }
}
module.exports.findMedicineData = async (req, res, next) => {
    try {
        const result = await findMedicineDataService(req.params.id);
        res.status(200).send({
            success: true,
            message: `Medicine Found`,
            data: result
        })
    } catch (err) {
        res.status(400).send({
            success: false,
            message: "Couldn't find medicine"
        })
    }
}
module.exports.updateOneMedicine = async (req, res, next) => {
    try {
        const result = await updateOneMedicineService(req.params.id, req.body);
        res.status(200).send({
            success: true,
            message: `Medicine Update`,
            data: result
        })
    } catch (err) {
        res.status(400).send({
            success: false,
            message: "Couldn't update medicine"
        })
    }
}


module.exports.deleteMedicine = async (req, res, next) => {
    try {
        const result = await deleteMedicineService(req.params);

        res.status(200).send({
            success: true,
            message: "Deleted Medicine",
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