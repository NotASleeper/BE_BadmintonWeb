const express = require("express");
const {
  createUsers,
  getAllUsers,
  getDetailUsers,
  updateUsers,
  deleteUsers,
} = require("../controllers/users.controllers");

const usersRouter = express.Router();

usersRouter.post("/", createUsers);
usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", getDetailUsers);
usersRouter.put("/:id", updateUsers);
usersRouter.delete("/:id", deleteUsers);

module.exports = {
  usersRouter,
};
