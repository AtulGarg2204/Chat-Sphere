const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  console.log(process.env.JWT_SECRE)
  return jwt.sign({ id }, "nitin", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
