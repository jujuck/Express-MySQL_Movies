const jwt = require('jsonwebtoken')

const PRIVATE_KEY = "MySuperPrivateKeyForMyQuest";

const calculateToken = (userEmail = "", uuidusers) => {
  return jwt.sign({ email: userEmail, uuid: uuidusers }, PRIVATE_KEY);
}

module.exports = { calculateToken };