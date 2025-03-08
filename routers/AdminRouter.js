const { Router } = require("express");
const {
  getAdmin,
  createAdmin,
  loginAdmin,
  checkAdmin,
} = require("../controllers/auth");
const isAdmin = require("../middlewares/isAdmin");

const adminRouter = Router();

adminRouter.get("/", isAdmin, getAdmin);
adminRouter.post("/", createAdmin);
adminRouter.post("/login", loginAdmin);
adminRouter.get("/check", checkAdmin);

module.exports = adminRouter;
