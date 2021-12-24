const authRouter = require('express').Router();
const { checkPassword } = require('../middleware/users')

authRouter.get('/login', checkPassword, (req, res) => {
  console.log(req.body)
})

module.exports = authRouter;