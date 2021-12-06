const moviesRouter = require('express').Router();
const Movies = require('../models/movies');

moviesRouter.get('/', (req, res) => {
  Movies.findMany()
    .then((movies) => {
      if (movies) {
        res.status(200).json(movies);
      } else {
        res.status(404).send('Movies not found');
      }
    })
    .catch((err) => {
      res.status(500).send('Error retrieving movies from the database')
    })
});

moviesRouter.get('/:id', (req, res) => {
  Movies.findOne(req.params.id)
    .then((movie) => {
      if (movie) {
        res.status(200).json(movie);
      } else {
        res.status(404).send('Movie not found');
      }
    })
    .catch((err) => {
      res.status(500).send('Error retrieving movie from the database')
    })
});

moviesRouter.post('/', (req, res) => {
  Movies.createOne(req.body)
    .then((result) => {
      res.send({ succes: 'Movie successfully save', data: result });
    })
    .catch((err) => {
      res.send('Error saving the movie');
    })
});

moviesRouter.put("/:id", (req, res) => {
  Movies.updateOne(req.params.id, req.body)
    .then((result) => {
      res.send({ success: 'Movie updated successfully', data: result })
    })
    .catch((err) => {
      res.send("Error updating the movie")
    })
});

moviesRouter.delete("/:id", (req, res) => {
  Movies.deleteOne(req.params.id)
    .then((result) => {
      res.send({ success: 'Movie deleted successfully', data: result })
    })
    .catch((err) => {
      res.send("Error deleting the movie")
    });

});

module.exports = moviesRouter;