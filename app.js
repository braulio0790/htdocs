//Required packages
const express = require('express');
const router = express.Router();
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
//This code show the folder from the hosting that will be displayed in the browser
app.use(express.static('frontend'));
app.get('/frontend', (req, res) => {
    res.sendFile(__dirname + '/frontend/index.html')
 });

app.use(bodyParser.json())
app.use((req, res, next) => {
 res.setHeader('Access-Control-Allow-Origin','*');
 next();
})
//When you access this path, then, execute data. 
app.use("/professional", data);

/*Retunr a JSON object in the end point /professional
app.use('/professional', function (req, res) {
    res.json(data);
});
*/

//Test the connection to MongoDB is working. esto enciende la conexion. 
mongodb.initDb((err,mongodb) =>{
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});

/* 
const data = {
    id: "8",
    professionalName: "Braulio Garcia",
    firstName: "Braulio",
}
*/