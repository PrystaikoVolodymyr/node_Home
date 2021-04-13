module.exports = {
  checkIsIdValid: async (req, res, next) => {
    try {
      const { userId } = req.params;

      if (userId.length !== 24) {
        throw new Error('bad user id');
      }
      await next();
    } catch (e) {
      res.status(400).json(e.message);
    }
  }
};
