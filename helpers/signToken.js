const jwt = require("jsonwebtoken");

const signToken = user => {
  const payload = {
    username: user.username
  };
  const secret = "secret";
  const options = {
    expiresIn: "1h"
  };
  return jwt.sign(payload, secret, options);
};

module.exports = signToken;
