//Call the necessary packages and files
const express = require("express");
const router = express.Router();
const mongodb = require('../mongoDB/conectionDB');
//The code below acess the getDb function from the connection file, then request the collection and convert it to array.
//This function will be later requested and covert it to a JSON as response
const getAllContacts = async (req,res) => {
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
      });
};

module.exports = {getAllContacts}