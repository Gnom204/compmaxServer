const { Router } = require("express");
const { createUser, loginUser } = require("../controllers/auth");

const authRouter = Router();

authRouter.post("/register", createUser);
authRouter.post("/login", loginUser);

module.exports = authRouter;
