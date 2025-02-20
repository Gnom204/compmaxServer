const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  orderHistory: [
    {
      products: [
        {
          type: Object,
          required: true,
        },
      ],
    },
  ],
});

module.exports = model("User", userSchema);
