const path = require('path');

path.parse('professional.json').name; // professional



//request express software
//const express = require('express');
//const app = express();
//request the connection DB file
//const connectdb = require('./mongoDB/conectionDB');

//Create a dynamic port, the one for local, and other for production
//const port = process.env.port || 3000;
//////////////////////////////////////////////////////////////

//import mongodb db package
const { MongoClient, ServerApiVersion } = require("mongodb");
//import dot enviroment packages
const dotenv = require('dotenv');
//call the configigurations for dotenv
dotenv.config();

const uri = process.env.CONNECTIONSTRING;

//Create a client variables to connect to the DB. This is official documentation.
const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }    
);

async function run(){
   try {
      await client.connect();
       // Send a ping to confirm a successful connection
       await client.db("admin").command({ ping: 1 });
       console.log("Pinged your deployment. You successfully connected to MongoDB!");
       await listDataBases(client);
   } catch (e){
      console.error(e);
   }finally{
      await client.close();
   }
}


MongoClient.connect(process.env.CONNECTIONSTRING, { useUnifiedTopology: true}, async function(err,client){
    const db = client.db();
    const results = await db.collection("pets").find().toArray();
    console.log(results);
    client.close();
});


run().catch(console.dir);

