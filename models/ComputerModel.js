const { Schema, model } = require("mongoose");

const computerSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  genre: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = model("Computer", computerSchema);
