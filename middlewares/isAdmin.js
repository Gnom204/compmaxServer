const AdminModel = require("../models/AdminModel");
const jwt = require("jsonwebtoken");

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await AdminModel.findById(decoded.id);
    if (!admin) {
      return res.status(403).json({ error: "Access denied" });
    }
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = isAdmin;
