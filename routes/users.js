const usersRouter = require('express').Router();
const Users = require('../models/users');
const { hashedPassword, createUuid } = require(('../middleware/users'));

usersRouter.post('/signin', hashedPassword, createUuid, (req, res) => {
  console.log(req.body)
  Users.createOne(req.body)
    .then(result => {
      delete req.body.hashedPassword;
      res.status(201).json({ user: req.body })
    })
    .catch(err => res.status(401).json({ msg: err }))
});

module.exports = usersRouter;