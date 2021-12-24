const moviesRouter = require('./movies');
const usersRouter = require('./users');
const authRouter = require('./auth')

const setupRoutes = (app) => {
  app.use('/movies', moviesRouter);
  app.use('/users', usersRouter);
  app.use('/auth', authRouter)
}

module.exports = { setupRoutes }