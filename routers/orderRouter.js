const { Router } = require("express");
const authCheck = require("../middlewares/isLogin");
const makeOrder = require("../controllers/makeOrder");

const orderRouter = Router();

orderRouter.post("/", authCheck, makeOrder);

module.exports = orderRouter;
