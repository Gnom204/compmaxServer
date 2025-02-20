const UserModel = require("../models/UserModel");
const makeOrder = async (req, res) => {
  try {
    const { id } = req.user;
    const { products } = req.body;
    console.log(id, products);
    if (!id || !products || !products.length) {
      return res.status(400).json({ error: "Invalid order details" });
    }

    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.orderHistory.push({ products });
    await user.save();

    return res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = makeOrder;
