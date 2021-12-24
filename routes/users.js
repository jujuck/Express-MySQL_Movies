const usersRouter = require('express').Router();
// const Users = require('../models/users');
const { hashedPassword, addUuid } = require(('../middleware/users'));

usersRouter.post('/signin', hashedPassword, addUuid, (req, res) => {
  console.log(req.body)
  res.json({ user: req.body })
});

module.exports = usersRouter;