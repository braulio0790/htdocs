//Required packages
const expressLib = require('express');
const router = expressLib.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const conectiondb = require('./mongoDB/conectionDB');

//Allow access to all the files in some folders
//Set up the port
const port = process.env.PORT || 8080;
//call express int the variable app
const app = expressLib();
//Call corse package
app.use(cors());

//Prepare responses based on URL requested
app.use(bodyParser.json());
app.use(expressLib.urlencoded({ extended: true }));
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
