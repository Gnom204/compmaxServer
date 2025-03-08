const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const mainRouter = require("./routers/MainRouter");
const isAdmin = require("./middlewares/isAdmin");
const adminRouter = require("./routers/AdminRouter");
const multer = require("multer");
const path = require("path");

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/compmax");

app.use("/", mainRouter);
app.use("/admin", adminRouter);
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Файлы сохраняются в папку "uploads"
  },
  filename: (req, file, cb) => {
    // Генерация уникального имени файла
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Роут для загрузки файла
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("Файл не был загружен.");
  }

  // Возвращаем клиенту информацию о загруженном файле
  res.send({
    message: "Файл успешно загружен!",
    filePath: `http://localhost:5000/uploads/${req.file.filename}`,
  });
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
