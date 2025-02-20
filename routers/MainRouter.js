const { Router } = require("express");
const gameRouter = require("./gameRouter");
const compRouter = require("./ComRouter");
const orderRouter = require("./orderRouter");
const authRouter = require("./AuthRouter");
const authCheck = require("../middlewares/isLogin");

const mainRouter = Router();
mainRouter.use("/games", gameRouter);
mainRouter.use("/computers", compRouter);
mainRouter.use("/orders", orderRouter);
mainRouter.use("/", authRouter);

module.exports = mainRouter;
