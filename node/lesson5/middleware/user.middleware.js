const errorCodes = require('../constants/errorCodes.enum');
const errorMessage = require('../error/error.message');
// const BD = require('../dataBase/user');

module.exports = {
  checkIsIdValid: async (req, res, next) => {
    try {
      const { userId } = req.params;
      if (+userId < 0) {
        throw new Error(errorMessage.BAD_ID);
      }
      await next();
    } catch (e) {
      res.status(errorCodes.BAD_REQUEST).json(e.message);
    }
  },
  checkIsUserValid: async (req, res, next) => {
    try {
      const { name, password } = req.body;
      if (!name || !password) {
        throw new Error(errorMessage.BAD_USER);
      }
      // for (const user of BD) {
      //   if (user.name === name) {
      //     throw new Error(errorMessage.ALREADY_CREATED);
      //   }
      // }
      await next();
    } catch (e) {
      res.status(errorCodes.BAD_REQUEST).json(e.message);
    }
  }
};
