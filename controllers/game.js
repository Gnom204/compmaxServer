const Game = require("../models/GameModel");

const createGame = async (req, res) => {
  const { name, genre, description, price, image } = req.body;
  if (!name || !genre || !description || !price || !image) {
    return res.status(400).json({ error: "Fill in all the fields" });
  }
  try {
    const game = await Game.create({ name, genre, description, price, image });
    return res.status(201).json({ game });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getGames = async (req, res) => {
  try {
    const games = await Game.find();
    return res.status(200).json({ games });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getGameById = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }
    return res.status(200).json({ game });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const updateGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }
    return res.status(200).json({ game });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const deleteGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }
    return res.status(200).json({ message: "Game deleted successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { createGame, getGames, getGameById, updateGame, deleteGame };

