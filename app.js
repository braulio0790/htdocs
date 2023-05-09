//Required packages
const cors = require('cors');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
//Required files/routes
const mongodb = require('./mongoDB/conectionDB');
const data = require('./controllers/professional');
const contacts = require('./controllers/contacts');

//Set up the port
const port = process.env.PORT || 8080;
//call express int the variable app
const app = express();
app.use(cors());

//Allow access to all the files in the frontend folder
//This code shows the folder from the hosting that will be displayed in the browser
app.use(express.static('frontend'));
app.use(express.static('controllers'));

//Shows the front end files
app.get('/frontend', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html')
 });
//Shows the professional JSON from mongo in the route /professional
app.use("/professional", data);
//Shows the contacts JSON from mongo in the route /contacts. all contacts
app.get("/contacts", async (req, res) =>{
    let response = await contacts.getContacts();
    res.status(401).json(response)
});
//Show a single contact
app.get("/contacts/:id", async (req, res) =>{
    //console.log(req.params['id']);
    //res.send(req.params['id'])
    //let response = await contacts.getContacts();
    //res.status(401).json(response)
    //console.log(contacts)
    const id = contacts.find({firstName: "Maria"})
    res.json(id);
});

//It initialized the DB connection. this is very important and it should happen once.
mongodb.initDb((err,mongodb) =>{
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});
