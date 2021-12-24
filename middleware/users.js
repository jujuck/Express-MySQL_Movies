const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const Users = require('../models/users');
const saltRounds = 10;

const hashedPassword = (req, res, next) => {
  bcrypt.hash(req.body.password, saltRounds)
    .then((hash) => {
      delete req.body.password;
      req.body = { ...req.body, hashedpassword: hash };
      next();
    })
    .catch(() => {
      res.status(500).send('Error encoding the password')
    });
}

const createUuid = (req, res, next) => {
  const uuidusers = uuidv4();
  req.body = { ...req.body, uuidusers };
  next();
}

const checkPassword = (req, res, next) => {
  Users.findOneByEmail(req.body.email)
    .then(user => {
      console.log(user)
      bcrypt.compare(req.body.password, user.hashedpassword)
        .then(result => {
          if (result) {
            req.body = user;
            delete req.body.hashedpassword;
            delete req.body.idusers;
            next()
          } else {
            res.status(404).json({ msg: 'Invalid Credentials' })
          }
        })
    })
    .catch(err => res.status(404).json({ msg: 'Invalid Credentials' }))
}

module.exports = {
  hashedPassword,
  createUuid,
  checkPassword
}