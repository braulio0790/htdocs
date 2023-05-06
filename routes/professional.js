
const routes = require('express').Router();
//const lesson1Controller = require('../controllers/lesson1');
const lesson2Controller = require('../frontend/lesson2');

routes.get('/', lesson2Controller.indexhtml);

module.exports = routes;