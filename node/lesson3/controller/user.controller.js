const userService = require('../service/user.service');

module.exports = {
    getAllUsers: async (req, res) => {
        const users = await userService.getAllUsers();

        res.json(users)
    },
    getSingleUser: async (req, res) => {
         const { userId } = req.params;

         const user = await userService.getSingleUser(userId);

         res.json(user);
    },
    createUser: async (req, res) => {
        const user = req.body

        await userService.createUser(user)

        res.json('Created')
    },
    deleteUser: async (req, res) => {
        const { userId } = req.params

        await userService.deleteUser(userId)

        res.json('Deleted')
    }
};
