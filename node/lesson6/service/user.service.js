const User = require('../dataBase/models/User');

module.exports = {
  findAllUsers: (userObject) => User.find(userObject),
  findOneUser: (userId) => User.findById(userId),
  deleteOneUser: (userId) => User.findByIdAndDelete(userId),
  createUser: (user) => User.create(user)
};
