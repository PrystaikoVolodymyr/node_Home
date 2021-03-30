const User = require('../dataBase/model/User');

module.exports = {
  getAllUsers: (filterObject) => User.find(filterObject),
  getSingleUser: (userId) => User.findById(userId),
  createUser: (user) => User.create(user),
  deleteUser: (userId) => User.findByIdAndDelete(userId)
};
