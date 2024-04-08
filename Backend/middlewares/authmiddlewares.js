const JWT = require("jsonwebtoken");

const authmiddleware = async (req, res, next) => {
  try {
    const token = req.header["authorisation"].split(" ")[1];
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized",
          success: false,
        });
      } else {
        req.body.userId = decode.id;
        next();
      }
    });
  } catch (e) {
    console.log("error in middleware : ", e);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
module.exports = authmiddleware;
