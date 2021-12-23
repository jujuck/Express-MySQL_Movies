const moviesRouter = require('./movies');
const usersRouter = require('./users');

const setupRoutes = (app) => {
  app.use('/movies', moviesRouter);
  app.use('/users', usersRouter)
}

module.exports = { setupRoutes }