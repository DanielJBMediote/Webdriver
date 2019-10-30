const express = require('express');
const routes = express.Router();

const TriviaController = require('./controllers/TriviaController');

routes.post('/trivia', TriviaController.store);
routes.get('/trivia/group', TriviaController.indexGroup);
routes.post('/trivia/answer', TriviaController.indexAnswer);


module.exports = routes;