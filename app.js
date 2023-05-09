//Required packages
const expressLib = require('express');
const router = expressLib.Router();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const conectiondb = require('./mongoDB/conectionDB');

//Allow access to all the files in some folders
//Set up the port
const port = process.env.PORT || 8080;
//call express int the variable app
const app = expressLib();
app.use(expressLib.static('frontend'));
app.use(expressLib.static('controllers'));

//Show the html
app.get('/frontend', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html')
});

//Prepare responses based on URL requested
app.use(bodyParser.json())
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   next();
})
//Connect to router file and display info according to the URL request
app.use('/', require('./routes/applicationRouter'));

//It initialized the DB connection. this is very important and it should happen once.
conectiondb.initDb((err,mongodb) =>{
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});
