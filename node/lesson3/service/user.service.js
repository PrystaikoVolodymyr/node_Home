const DB = require('../dataBase/user');

module.exports = {
    getAllUsers: () => { return DB },
    getSingleUser: (userId) => { return DB[userId] },
    createUser: (user)  => { return DB.push(user) },
    deleteUser: (userId) => {
        DB.splice(userId,1)
        return DB
    }
};
