const connexion = require('./db-config');
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

connexion.connect((err) => {
  if(err) {
    console.error('error connecting' + err.stack)
  } else {
    console.log('connected as id ' + connexion.threadId)
  }
});

app.use(express.json());

app.get('/movies/:id', (req, res) => {
  const movieId = req.params.id;
  
  connexion.promise().query(
    'SELECT * FROM movies WHERE id = ?',
    [movieId])
    .then((result) => {
      if (result[0].length) res.status(201).json(result[0]);
      else res.status(404).send('Movie not found');
    }).catch((err)=> {
      res.send('Error retrieving data from database');
    })
});

app.get('/movies', (req, res) => {
  connexion.promise().query('SELECT * FROM movies')
    .then((result) => {
      res.status(200).json(result[0]);
    }).catch((err)=> {
      res.send('Error retrieving data from database');
    })
});

app.post('/movies', (req, res) => {
  console.log('Post');
  const { title, synopsis, genre, year, duration } = req.body;
  connexion.promise().query(
    'INSERT INTO movies(title, synopsis, genre, year, duration) VALUES (?, ?, ?, ?, ?)',
    [title, synopsis, genre, year, duration])
    .then((result) =>  {
      res.send({succes: 'Movie successfully save', data: result});
    })
    .catch((err) => {
      res.send('Error saving the movie');
    })
})

app.listen(port, () => console.log('server listening on port 5000'));
