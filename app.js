//Required packages
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
//Required files/routes
const mongodb = require('./mongoDB/conectionDB');
const data = require('./controllers/professional');
//const contacts = require('./controllers/contacts');
//Allow access to all the files in some folders
//Set up the port
const port = process.env.PORT || 8080;
//call express int the variable app
const app = express();
app.use(express.static('frontend'));
app.use(express.static('controllers'));


//Show the html
app.get('/frontend', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html')
});

app.use(bodyParser.json())
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   next();
})
app.use('/', require('./routes/professional'));




//Shows the professional JSON from mongo in the route /professional
//app.use("/professional", data);
//Shows the contacts JSON from mongo in the route /contacts. all contacts
//app.get("/contacts", contacts.getAllContacts);
//Show a single contact
//app.get("/contacts/:id", )

//It initialized the DB connection. this is very important and it should happen once.
mongodb.initDb((err,mongodb) =>{
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});
