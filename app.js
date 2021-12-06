const express = require('express');
const cors = require('cors');
const { setupRoutes } = require('./routes');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

setupRoutes(app);

app.listen(port, () => console.log('server listening on port 5000'));
