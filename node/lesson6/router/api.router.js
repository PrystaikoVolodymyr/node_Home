const router = require('express').Router();
const { userRouter } = require('./index');

router.use('/users', userRouter);

module.exports = router;
