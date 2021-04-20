const { errorMessages } = require('../error');
const { createUserValidator } = require('../validators');
const User = require('../dataBase/models/User');

module.exports = {
  checkIsIdValid: async (req, res, next) => {
    try {
      const { userId } = req.params;

      if (userId.length !== 24) {
        throw new Error(errorMessages.BAD_ID.en);
      }
      await next();
    } catch (e) {
      res.status(400).json(e.message);
    }
  },
  checkIsUserValid: async (req, res, next) => {
    try {
      const { email, language = 'en' } = req.body;
      if (await User.findOne({ email })) {
        throw new Error(errorMessages.BAD_USER[language]);
      }
      const { error } = createUserValidator.validate(req.body);
      if (error) {
        throw new Error(error.details[0].message);
      }
      await next();
    } catch (e) {
      res.status(400).json(e.message);
    }
  }

};
