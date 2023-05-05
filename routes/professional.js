
const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.marianaGarcia);
routes.get('/mariaOlvera', lesson1Controller.mariaOlvera);

module.exports = routes;