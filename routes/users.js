const usersRouter = require('express').Router();
// const Users = require('../models/users');
const { hashedPassword } = require(('../middleware/users'));

usersRouter.post('/signin', hashedPassword, (req, res) => {
  console.log(req.hashedpassword)
  res.json({ user: req.body })

});

module.exports = usersRouter;