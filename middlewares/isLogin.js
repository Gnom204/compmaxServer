const jwt = require("jsonwebtoken");

const authCheck = (req, res, next) => {
  if (req.headers.authorization === undefined)
    return res.status(401).json({ error: "Unauthorized" });
  const token = req.headers.authorization.split(" ")[1];
  console.log(token);
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      console.log(req.user);
    } catch (error) {
      return res.status(401).json({ error: "Unauthorized" });
    }
  }
  next();
};

module.exports = authCheck;
