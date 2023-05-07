//Required packages
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./mongoDB/conectionDB');
const data = require('./controllers/professional');
//const path = require('path');
//Set up the port
const port = process.env.PORT || 8080;
//call express int the variable app
const app = express();
//Allow access to all the files in the frontend
app.use(express.static('frontend'));
//app.use(express.static('controllers'));


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
//Retunr a JSON object
app.get('/professional', (req, res) =>{
    res.json(data);
});

//Test the connection to MongoDB is working 
mongodb.initDb((err,mongodb) =>{
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});