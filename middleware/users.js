const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const saltRounds = 10;

const hashedPassword = (req, res, next) => {
  bcrypt.hash(req.body.password, saltRounds)
    .then((hash) => {
      console.log(hash)
      req.body = { ...req.body, hashedpassword: hash };
      next();
    })
    .catch(() => {
      res.status(500).send('Error encoding the password')
    });
}

const addUuid = (req, res, next) => {
  const uuid = uuidv4();
  req.body = { ...req.body, uuid };
  next();
}

module.exports = {
  hashedPassword,
  addUuid
}