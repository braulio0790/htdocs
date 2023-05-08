//Call the necessary packages and files
const express = require("express");
const router = express.Router();
const mongodb = require('../mongoDB/conectionDB');
//The code below acess the getDb function from the connection file, then request the collection and convert it to array.
//This function will be later requested and covert it to a JSON as response
const getContacts = async (req,res,next) => {
let response;
const result = await mongodb.getDb().db().collection('contacts').find();
response = result.toArray();
return response
};

exports.getContacts = getContacts;