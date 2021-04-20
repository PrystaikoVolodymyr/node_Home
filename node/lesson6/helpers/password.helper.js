const bcrypt = require('bcrypt');
const { errorMessages } = require('../error');

module.exports = {
  hash: (password) => bcrypt.hash(password, 12),
  compare: (password, hashPassword) => {
    const isPasswordEqual = bcrypt.compare(password, hashPassword);
    if (!isPasswordEqual) {
      throw new Error(errorMessages.BAD_AUTH.en);
    }
  }
};
