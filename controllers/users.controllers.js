const { Users } = require("../models");

const createUsers = async (req, res) => {
  try {
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
    const newUsers = await Users.create({
      name,
      username,
      password,
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
};
