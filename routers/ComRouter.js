const { Router } = require("express");
const isAdmin = require("../middlewares/isAdmin");
const {
  deleteComputer,
  updateComputer,
  getComputerById,
  createComputer,
  getAllComputers,
} = require("../controllers/pc");

const compRouter = Router();

compRouter.get("/", getAllComputers);
compRouter.post("/", isAdmin, createComputer);
compRouter.get("/:id", getComputerById);
compRouter.put("/:id", isAdmin, updateComputer);
compRouter.delete("/:id", isAdmin, deleteComputer);

module.exports = compRouter;
