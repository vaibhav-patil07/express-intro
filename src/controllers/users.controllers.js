const Users = require("../../data/users.json");

const getAllUsers = (req, res) => {
  res.status(200).json({
    message: "Users fetched successfully",
    data: [...Users],
  });
};

const getUserById = (req, res) => {
  const {
    params: { id },
  } = req;
  const result = Users.find((user) => user.id === id);
  if (result) {
    res.status(200).json({
      message: "user found",
      data: { ...result },
    });
    return;
  }
  res.status(404).json({
    message: "user not found",
  });
};

module.exports = {
  getAllUsers,
  getUserById,
};
