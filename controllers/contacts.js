//Call the necessary packages and files
const connectiondb = require('../mongoDB/conectionDB');
const ObjectId = require('mongodb').ObjectId;

//Get all contacts 
const getAllData = async (req, res) => {
  const result = await connectiondb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};
//Get one contact based on id
const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await connectiondb.getDb().db().collection('contacts').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = { getAllData, getSingle };