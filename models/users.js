const connexion = require('../db-config');
const db = connexion.promise();

const createOne = ({ uuidusers, firstname, lastname, email, hashedpassword }) => {
  return db.query('INSERT INTO users (uuidusers, firstname, lastname, email, hashedpassword) VALUES (?, ?, ?, ?, ?)',
    [uuidusers, firstname, lastname, email, hashedpassword])
    .then(result => {
      return { uuidusers, firstname, lastname, email }
    })
}

module.exports = {
  createOne
}