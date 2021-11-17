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

const items = [
  { id: 1, name: 'item1' },
  { id: 2, name: 'item2' },
];

app.get('/myroute', (req, res) => {
  console.log('handling /myroute');
  res.send(items);
});

app.listen(port, () => console.log('server listening on port 5000'));
