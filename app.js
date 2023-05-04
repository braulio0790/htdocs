//express web server
const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');
const connectDB = require('./mongoDB/conectionDB');

connectDB();
const port = 3000;

app.use('/', require('./routes'));

app.listen(process.env.port || port);
console.log('Web Server is listening at port ' + (process.env.port || port));