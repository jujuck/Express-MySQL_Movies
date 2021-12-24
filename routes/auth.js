const authRouter = require('express').Router();
const { calculateToken } = require('../helpers/users');
const { checkPassword } = require('../middleware/users')

authRouter.get('/login', checkPassword, (req, res) => {
  console.log(req.body)
  res
    .status(201)
    .cookie('user_token', calculateToken(req.body.email, req.body.uuidusers), {
      httpOnly: true,
      expires: new Date(Date.now() + (1000 * 60 * 60 * 24))
    })
    .json({ user: req.body })
})

module.exports = authRouter;