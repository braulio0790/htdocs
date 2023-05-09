const express = require("express");
const router = express.Router();
const connectiondb = require('../mongoDB/conectionDB');

//This code connect the DB, request info from the collection, loop it, construct a JSON , give a response, and export function
const getData = async (req,res,next) => {
  const result = await connectiondb.getDb().db().collection('professional').find();
    await result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
};

module.exports = {getData};