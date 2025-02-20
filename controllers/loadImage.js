const dotenv = require("dotenv");
dotenv.config();
const domen = process.env.DOMEN;
const loadImage = async (req, res) => {
  try {
    if (req.files.length) {
      res.status(200).json({
        url: req.files.map((file) => `${domen}/upload/${file.filename}`),
      });
    } else {
      res.send("No files uploaded");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = loadImage;
