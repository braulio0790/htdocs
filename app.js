//express web server
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./mongoDB/conectionDB');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();
//Allow access to all the files in the frontend
app.use(express.static('frontend'));

app
.use(bodyParser.json())
.use((req, res, next) => {
 res.setHeader('Access-Control-Allow-Origin','*');
 next();
})
//This code show the folder from the hosting that will be displayed in the browser
app.get('/frontend', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html')
 });

mongodb.initDb((err,mongodb) =>{
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});