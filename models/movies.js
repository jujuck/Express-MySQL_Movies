const Joi = require('joi');
const connexion = require('../db-config');

const db = connexion.promise();

const checkMoviesFields = (data, create = false) => {
  const presence = create ? 'required' : 'optional';
  return Joi.object({
    id: Joi.number().presence('optional'),
    title: Joi.string().max(250).presence(presence),
    synopsis: Joi.string().presence(presence),
    year: Joi.number().integer().min(1888).presence(presence),
    genre: Joi.string().max(100).presence(presence),
    duration: Joi.number().integer().min(1).presence(presence),
  }).validate(data, { abortEarly: false }).error;
}

const findMany = (query) => {
  let sqlQuery = 'SELECT * FROM movies';
  const sqlValue = [];
  let transitionWord = " WHERE"

  if (query.genre) {
    sqlQuery += `${transitionWord} genre = ?`
    sqlValue.push(query.genre);
    transitionWord = "AND"
  }

  if (query.max_duration) {
    sqlQuery += `${transitionWord} duration >= ?`
    sqlValue.push(query.max_duration);
    transitionWord = " AND"
  }

  if (query.min_year) {
    sqlQuery += `${transitionWord} year >= ?`
    sqlValue.push(query.min_year);
    transitionWord = " AND"
  }

  return db.query(sqlQuery, sqlValue)
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
  deleteOne,
  checkMoviesFields
};
