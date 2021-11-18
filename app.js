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

app.get('/movies', (req, res) => {
  connexion.promise().query('SELECT * FROM movies')
    .then((result) => {
      res.status(200).json(result[0]);
    }).catch((err)=> {
      res.send('Error retrieving data from database');
    })
});

app.listen(port, () => console.log('server listening on port 5000'));
