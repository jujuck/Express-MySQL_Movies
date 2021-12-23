const bcrypt = require('bcrypt');

const saltRounds = 10;

const hashedPassword = (req, res, next) => {
  bcrypt.hash(req.body.password, saltRounds)
    .then((hash) => {
      console.log(hash)
      req.hashedpassword = hash;
      next();
    })
    .catch(() => {
      res.status(500).send('Error encoding the password')
    });
}

module.exports = {
  hashedPassword
}