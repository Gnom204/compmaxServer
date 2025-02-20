const Computer = require("../models/ComputerModel");

const createComputer = async (req, res) => {
  const { name, price, image, description } = req.body;
  if (!name || !price || !image || !description) {
    return res.status(400).json({ error: "Fill in all the fields" });
  }
  try {
    const computer = await Computer.create({ name, price, image, description });
    return res.status(201).json(computer);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getAllComputers = async (req, res) => {
  try {
    const computers = await Computer.find();
    return res.status(200).json(computers);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getComputerById = async (req, res) => {
  try {
    const computer = await Computer.findById(req.params.id);
    if (!computer) {
      return res.status(404).json({ error: "Computer not found" });
    }
    return res.status(200).json(computer);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const updateComputer = async (req, res) => {
  try {
    const computer = await Computer.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description,
      },
      {
        new: true,
      }
    );
    if (!computer) {
      return res.status(404).json({ error: "Computer not found" });
    }
    return res.status(200).json(computer);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const deleteComputer = async (req, res) => {
  try {
    const computer = await Computer.findByIdAndRemove(req.params.id);
    if (!computer) {
      return res.status(404).json({ error: "Computer not found" });
    }
    return res.status(200).json({ message: "Computer deleted successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createComputer,
  getAllComputers,
  getComputerById,
  updateComputer,
  deleteComputer,
};
