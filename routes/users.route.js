const express = require('express');
const { addUser, getAllUsers, getUsersByEmail, getAdmin } = require('../Controlers/users.controller');
const router = express.Router();

router.route('/')
    .get(getAllUsers)

// get users by name or email
/* router.route('/email')
    .get(getUsersByEmail) */

router.route('/admin/:email').get(getAdmin)

router.route('/:email').post(addUser)

module.exports = router;