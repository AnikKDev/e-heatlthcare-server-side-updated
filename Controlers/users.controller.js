const Users = require("../Models/User");
const { addUserService, getAllUsersService, getUsersByEmailService, getAdminService } = require("../services/user.services")

module.exports.addUser = async (req, res, next) => {
    try {
        const email = req.params.email;
        const result = await addUserService(req.body, email);
        if (result.message) {
            res.status(400).send({
                success: false,
                message: result.message
            })
        } else {
            res.status(200).send({
                success: true,
                message: "User added successfully",
                data: result
            })
        }

    } catch (err) {
        res.status(400).send({
            success: false,
            message: "Couldn't add user"
        })
    }
}

// get all users
module.exports.getAllUsers = async (req, res, next) => {
    try {
        const result = await getAllUsersService();
        res.status(200).send({
            success: true,
            message: "Rendered all users",
            data: result
        })
    } catch (err) {
        res.status(400).send({
            success: false,
            message: "Couldn't get users"
        })
    }
}

// get users by email
module.exports.getUsersByEmail = async (req, res, next) => {
    try {
        const result = await getUsersByEmailService(req.query.email);
        res.status(200).send({
            success: true,
            message: `Total users found ${result.length}`,
            data: result
        })
    } catch (err) {
        res.status(400).send({
            success: false,
            message: "No users found"
        })
    }
}

module.exports.getAdmin = async (req, res, next) => {
    try {
        const email = req.params.email;
        const result = await getAdminService(email);
        // console.log(result.isAdmin)
        if (result.isAdmin) {
            res.status(200).send({
                success: true,
                message: "Admin found successfully",
                data: result
            })
        } else {
            res.status(400).send({
                success: true,
                message: "Not an admin",
                data: result
            })
        }

    } catch (err) {
        res.status(400).send({
            success: false,
            message: "Couldn't add user"
        })
    }
}