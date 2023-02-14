const express = require('express');
const { addMedicine, getAllMedicine, findMedicineData, updateOneMedicine, deleteMedicine } = require('../Controlers/medicine.controller');
const router = express.Router();
// add medicine
router.route('/')
    .post(addMedicine).get(getAllMedicine)


router.route('/:id').get(findMedicineData).patch(updateOneMedicine).delete(deleteMedicine)

module.exports = router;