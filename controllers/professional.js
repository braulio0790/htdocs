const express = require("express");
const router = express.Router();
const mongodb = require('../mongoDB/conectionDB');
//This code connect the DB, request info from the collection, loop it, construct a JSON , give a good response, and export function

const getData = async (req,res,next) => {
  console.log('accessing get data');
  const result = await mongodb.getDb().db().collection('professional').find();
  console.log('Result content is ' + result);
    await result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      console.log('lists content is ' + lists); 
      console.log('lists[0] content is ' + lists[0]); 
      res.status(200).json(lists[0]);
    });
};
/*
router.get("/", async (req, res) => {
    //call the function get data
    let response = await getData();
    res.status(401).json({
      //This is the object that is comming from the JSON
      response
    });
  });
*/
module.exports = {getData};