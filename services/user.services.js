const Users = require("../Models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.exports.addUserService = async (data, email) => {
    try {
        /* const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(data.password, salt);
        const user = { name: data.name, address: data.address, password: hashedPassword, email: data.email, gender: data.gender, phone: data.phone }; */
        const query = { email: email };
        const options = {
            upsert: true,
            new: true,
            setDefaultsOnInsert: true
        };
        const token = jwt.sign({ email: email }, process.env.JWT_TOKEN)
        const result = await Users.updateOne({ email: email }, { $setOnInsert: data }, { upsert: true })
        return { result, accessToken: token }
    } catch (err) {
        return (err)
    }
}
// get all users
module.exports.getAllUsersService = async () => {
    const result = await Users.find({});
    return result;
}
// get admin
module.exports.getAdminService = async (email) => {
    const result = await Users.findOne({ email: email });
    // console.log(result)
    return result;
}
// get all users by email search
module.exports.getUsersByEmailService = async (data) => {
    const result = await Users.find({ email: data })
    return result;
}