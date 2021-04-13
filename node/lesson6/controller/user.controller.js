const { userService } = require('../service');

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await userService.findAllUsers(req.query);

      res.json(users);
    } catch (e) {
      res.status('400').json(e.message);
    }
  },
  getOneUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await userService.findOneUser(userId);

      res.json(user);
    } catch (e) {
      res.status(400).json(e.message);
    }
  },
  deleteOneUser: async (req, res) => {
    try {
      const { userId } = req.params;
      await userService.deleteOneUser(userId);

      res.json('User is deleted');
    } catch (e) {
      res.status(400).json(e.message);
    }
  },
  createUser: async (req, res) => {
    try {
      const user = req.body;
      await userService.createUser(user);

      res.json('created');
    } catch (e) {
      res.status(400).json(e.message);
    }
  }
};
