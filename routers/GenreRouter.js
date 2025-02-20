const { Router } = require("express");
const { getGenres, createGenre } = require("../controllers/genre");

const genreRouter = Router();

genreRouter.get("/", getGenres);
genreRouter.post("/", createGenre);

module.exports = genreRouter;
