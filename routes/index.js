const moviesRouter = require('./movies');

const setupRoutes = (app) => {
  app.use('/movies', moviesRouter)
}

module.exports = { setupRoutes }