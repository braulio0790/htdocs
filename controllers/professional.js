const express = require("express");
const router = express.Router();
const mongodb = require('../mongoDB/conectionDB');
//This code connect the DB, request info from the collection, loop it, construct a JSON , give a good response, and export function

const getData = async (req,res,next) => {
    let response;
    const result = await mongodb.getDb().db().collection('professional').find();
    await result.toArray().then((lists) => {
        //res.setHeader('Content-Type', 'application/json');
        //res.status(200).json(lists[0]); //we just need the first one (the only one)
        response = lists[0];
    });
    return response;
};

router.get("/", async (req, res) => {
    //call the function get data
    let response = await getData();
    res.status(401).json({
      //This is the object that is comming from the JSON
      response
    });
  });

module.exports = router;
//module.exports = { getData };