const users = require("../../models/UserSchema");
const authController = async (req, res) => {
  try {
    const user = await users.findById({
      _id: req.body.userid,
    });
    user.password = undefined;
    if (!user) {
      return res.status(404).send({
        message: "User not found",
        success: false,
      });
    } else {
      res.status(200).send({
        success: true,
        data: user,
      });
    }
  } catch (e) {
    console.log("Error in Auth Controller: ", e);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
