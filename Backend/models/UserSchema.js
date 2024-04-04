const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please enter the name"],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "Please provide an email address"],
  },
  password: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model("users", userSchema);
module.exports = Users;
