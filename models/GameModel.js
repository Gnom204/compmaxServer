const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

module.exports = model("Game", gameSchema);
