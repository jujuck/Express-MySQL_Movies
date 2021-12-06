const connexion = require('../db-config');

const db = connexion.promise();

const findMany = () => {
  return db.query('SELECT * FROM movies')
    .then((result) => result[0]);
};

const findOne = (movieId) => {
  return db.query(
    'SELECT * FROM movies WHERE id = ?',
    [movieId])
    .then((result) => result[0]);
};

const createOne = ({ title, synopsis, genre, year, duration }) => {
  return db.query(
    'INSERT INTO movies(title, synopsis, genre, year, duration) VALUES (?, ?, ?, ?, ?)',
    [title, synopsis, genre, year, duration])
    .then((result) => result[0])
}

const updateOne = (movieId, moviesData) => {
  return db.query(
    'UPDATE movies SET ? WHERE id = ?',
    [moviesData, movieId])
    .then((result) => result[0])
};

const deleteOne = (movieId) => {
  return db.query(
    'DELETE FROM movies WHERE id = ?',
    [movieId])
    .then((result) => result[0])
}

module.exports = {
  findOne,
  findMany,
  createOne,
  updateOne,
  deleteOne
};
