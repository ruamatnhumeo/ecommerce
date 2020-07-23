const jwt = require("jsonwebtoken");
const config = require("../config");

const JWT_SECRET = config.JWT_SECRET;

function authMiddleware(req, res, next) {
  const token = req.header("x-auth-token");

  //check for token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorizaton denied" });
  }

  try {
    //verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    //add user from payload
    req.user = decoded;

    next();
  } catch (error) {
    res.status(400).json({ msg: "Token is not valid" });
  }
}

module.exports = authMiddleware;