const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const mainRouter = require("./routers/MainRouter");
const isAdmin = require("./middlewares/isAdmin");
const adminRouter = require("./routers/AdminRouter");

const app = express();
dotenv.config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/compmax");

app.use("/", mainRouter);
app.use("/admin", adminRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
