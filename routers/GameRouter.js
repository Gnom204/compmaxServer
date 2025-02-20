const { Router } = require("express");
const {
  getGames,
  getGameById,
  deleteGame,
  updateGame,
  createGame,
} = require("../controllers/game");
const isAdmin = require("../middlewares/isAdmin");

const gameRouter = Router();

gameRouter.get("/", getGames);
gameRouter.post("/", isAdmin, createGame);
gameRouter.get("/:id", getGameById);
gameRouter.delete("/:id", isAdmin, deleteGame);
gameRouter.put("/:id", isAdmin, updateGame);

module.exports = gameRouter;
