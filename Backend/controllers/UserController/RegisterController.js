const Users = require("../../models/UserSchema");
const bcrypt = require("bcryptjs");

const isValidPassword = (password) => {
  // Regular expression for password validation
  let reg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return reg.test(password);
};
const ValidEmail = (email) => {
  let reg = `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`;
  return new RegExp(reg).test(email);
};

const hashpassword = async (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hash(password, salt);
};

const RegisterController = async (req, res) => {
  try {
    let user = await Users.findOne({ email: req.body.email });
    if (!user) {
      //check password validity
      if (!isValidPassword(req.body.password)) {
        return res.status(400).json("Please provide a stronger password");
      }
      if (!ValidEmail(req.body.email)) {
        return res.status(400).json("Invalid Email");
      }

      //hash the password before saving to database
      const encrypted_password = await hashpassword(req.body.password);
      req.body.password = encrypted_password;
      const newUser = new Users(req.body);
      await newUser.save();
      res.status(201).json({ message: "User created!", user: newUser });
    } else {
      return res.status(409).json("Email already exists");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json("Error creating account");
  }
};
module.exports = { RegisterController };
