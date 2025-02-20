const { Router } = require("express");
const { getAdmin, createAdmin, loginAdmin } = require("../controllers/auth");
const isAdmin = require("../middlewares/isAdmin");

const adminRouter = Router();

adminRouter.get("/", isAdmin, getAdmin);
adminRouter.post("/", isAdmin, createAdmin);
adminRouter.post("/login", loginAdmin);

module.exports = adminRouter;
