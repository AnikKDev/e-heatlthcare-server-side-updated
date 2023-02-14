const mongoose = require("mongoose");
const { Schema } = mongoose;

// user schema
const usersSchema = new Schema({
  name: {
    type: String,
    // required: [true, 'Name is required'],
  },
  email: {
    type: Object,
    required: [true, "Email is required"],
  },
  phone: {
    type: String,
    // required: [true, "Phone is required"]
  },
  gender: String,
  address: {
    type: String,
    // required: [true, "Address is required"]
  },
  password: {
    type: String,
    // required: [true, "Password is reaquired"]
  },
  isAdmin: {
    type: Boolean,
    default: false,
    immutable: true,
  },
});

// user model

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
