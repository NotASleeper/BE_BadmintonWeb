const express = require("express");
const {
  createUsers,
  getAllUsers,
  getDetailUsers,
  updateUsers,
  deleteUsers,
  login,
  getDetailUsersByUsername,
  changePassword,
} = require("../controllers/users.controllers");
const { authenticate } = require("../middlewares/auth/authenticate");

const usersRouter = express.Router();

usersRouter.post("/", createUsers);
usersRouter.post("/login", login);
usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", getDetailUsers);
usersRouter.put("/:id", updateUsers);
usersRouter.delete("/:id", deleteUsers);
usersRouter.get("/username/:username", getDetailUsersByUsername);
usersRouter.post("/changepass", authenticate, changePassword);

module.exports = {
  usersRouter,
};
