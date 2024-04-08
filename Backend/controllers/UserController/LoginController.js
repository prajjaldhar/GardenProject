const Users = require("../../models/UserSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const ValidEmail = (email) => {
  let reg = `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`;
  return new RegExp(reg).test(email);
};

const LoginController = async (req, res) => {
  try {
    if (!ValidEmail(req.body.email)) {
      return res.status(404).json("Invalid Email");
    }
    let user = await Users.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid Credentials!", success: false });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .send({ message: "Invalid Credentials", success: false });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.status(200).json({
      message: "Loggedin Successfull",
      data: user,
      token,
      success: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json("Error creating account");
  }
};
module.exports = { LoginController };
