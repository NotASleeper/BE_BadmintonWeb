const express = require("express");
const {
  createUsers,
  getAllUsers,
  getDetailUsers,
  updateUsers,
  deleteUsers,
  login,
  getDetailUsersByUsername,
} = require("../controllers/users.controllers");

const usersRouter = express.Router();

usersRouter.post("/", createUsers);
usersRouter.post("/login", login);
usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", getDetailUsers);
usersRouter.put("/:id", updateUsers);
usersRouter.delete("/:id", deleteUsers);
usersRouter.get("/username/:username", getDetailUsersByUsername);

module.exports = {
  usersRouter,
};
