const { userService } = require('../service');
const { errorCodes } = require('../constants');
const { passwordHasher } = require('../helpers');

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await userService.findAllUsers(req.query);

      res.json(users);
    } catch (e) {
      res.status(errorCodes.BAD_REQUEST).json(e.message);
    }
  },
  getOneUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await userService.findOneUser(userId);

      res.json(user);
    } catch (e) {
      res.status(errorCodes.BAD_REQUEST).json(e.message);
    }
  },
  deleteOneUser: async (req, res) => {
    try {
      const { userId } = req.params;
      await userService.deleteOneUser(userId);

      res.json('User is deleted');
    } catch (e) {
      res.status(errorCodes.BAD_REQUEST).json(e.message);
    }
  },
  createUser: async (req, res) => {
    try {
      const { password } = req.body;
      const hashPassword = await passwordHasher.hash(password);
      await userService.createUser({ ...req.body, password: hashPassword });

      res.json('created');
    } catch (e) {
      res.status(errorCodes.BAD_REQUEST).json(e.message);
    }
  }
};
