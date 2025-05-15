const { Users } = require("../models");
const bcrypt = require("bcryptjs");

const createUsers = async (req, res) => {
  const {
    name,
    username,
    password,
    email,
    gender,
    address,
    phonenumber,
    roleid,
  } = req.body;
  try {
    // Tạo ra một chuỗi ngẫu nhiên
    const salt = bcrypt.genSaltSync(10);
    // Mã hóa chuỗi ngẫu nhiên + password
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUsers = await Users.create({
      name,
      username,
      password: hashedPassword,
      email,
      gender,
      address,
      phonenumber,
      roleid,
    });
    res.status(201).send(newUsers);
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({
    where: { username },
  });
  const isAuth = bcrypt.compareSync(password, user.password);
  if (isAuth) {
    res.status(200).send({
      message: "Login successfully",
    });
  } else {
    res.status(401).send({
      message: "Login failed",
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const userslist = await Users.findAll();
    res.status(200).send(userslist);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetailUsers = async (req, res) => {
  const { id } = req.params;
  try {
    const detailUsers = await Users.findOne({
      where: { id },
    });
    res.status(200).send(detailUsers);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUsers = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    username,
    password,
    email,
    gender,
    address,
    phonenumber,
    roleid,
  } = req.body;
  try {
    const detailUsers = await Users.findOne({
      where: { id },
    });
    detailUsers.name = name;
    detailUsers.username = username;
    detailUsers.password = password;
    detailUsers.email = email;
    detailUsers.gender = gender;
    detailUsers.address = address;
    detailUsers.phonenumber = phonenumber;
    detailUsers.roleid = roleid;
    await detailUsers.save();
    res.status(200).send(detailUsers);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteUsers = async (req, res) => {
  const { id } = req.params;
  try {
    await Users.destroy({
      where: { id },
    });
    res.status(200).send("Deleted successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createUsers,
  getAllUsers,
  getDetailUsers,
  updateUsers,
  deleteUsers,
  login,
};
