const { Genre } = require("../models/Genre");

const getGenres = async (req, res) => {
  try {
    const genres = await Genre.find();
    res.status(200).json(genres);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createGenre = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Fill in all the fields" });
    }
    const genre = await Genre.create({ name });
    res.status(201).json(genre);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getGenreById = async (req, res) => {
  try {
    const genre = await Genre.findById(req.params.id);
    if (!genre) {
      return res.status(404).json({ error: "Genre not found" });
    }
    res.status(200).json(genre);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateGenre = async (req, res) => {
  try {
    const genre = await Genre.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!genre) {
      return res.status(404).json({ error: "Genre not found" });
    }
    res.status(200).json(genre);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteGenre = async (req, res) => {
  try {
    const genre = await Genre.findByIdAndDelete(req.params.id);
    if (!genre) {
      return res.status(404).json({ error: "Genre not found" });
    }
    res.status(200).json({ message: "Genre deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getGenres,
  createGenre,
  getGenreById,
  updateGenre,
  deleteGenre,
};
