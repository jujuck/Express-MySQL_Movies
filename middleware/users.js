const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

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

module.exports = {
  hashedPassword,
  createUuid
}