const Users = require("../../models/UserSchema");

const isValidPassword = (password) => {};

const ValidEmail= (email)=>{
  let reg = `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$` ;
  return new RegExp(reg).test(email);
}

const hashpassword = (password) => {};

const RegisterController = async (req, res) => {
  try {
    let user = await Users.findOne({ email: req.body.email });
    if (!user) {
      //check password validity
      if (!isValidPassword(req.body.password)) {
        return res.status(400).json("Please provide a stronger password");
      }
      if(!ValidEmail(req.body.email))
      {
        return res.status(400).json( "Invalid Email");
      }

      //hash the password before saving to database
      const encrypted_password = await hashpassword(req.body.password);
     // console.log(encrypted_password);
      const newUser = new Users({ ...req.body, password: encrypted_password });

      //save user to the database
      await newUser.save();

      //return json response with token and username of newly registered user
      //const { password, ...other } = newUser._doc;
      res.status(201).json({message: "User created!", user:newUser});
    } else {
      return res.status(409).json("Email already exists");
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json("Error creating account");
  }
};
module.exports = { RegisterController };
