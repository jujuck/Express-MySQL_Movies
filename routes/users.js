const usersRouter = require('express').Router();
const Users = require('../models/users');
const { checkUserFields, hashedPassword, createUuid } = require(('../middleware/users'));

usersRouter.post('/signin', checkUserFields, hashedPassword, createUuid, (req, res) => {
  Users.createOne(req.body)
    .then(result => {
      delete req.body.hashedpassword;
      res.status(201).json({ user: req.body })
    })
    .catch(err => res.status(401).json({ msg: err }))
});

module.exports = usersRouter;