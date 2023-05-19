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

//Insert Contact
const insertData = async (req, res) => {
  const contactInfo = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday:req.body.birthday
  };
  const response = await connectiondb.getDb().db().collection('contacts').insertOne(contactInfo);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
};

//Insert Contact
const updateData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const contactInfo = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday:req.body.birthday
  };
  const response = await connectiondb.getDb().db().collection('contacts').replaceOne({ _id: userId }, contactInfo);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(200).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the contact.');
  }
};

//Delete Contact
const deleteData = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await connectiondb.getDb().db().collection('contacts').deleteOne({ _id: userId });
  if (response.acknowledged) {
    res.status(200).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
};

module.exports = { getAllData, getSingle, insertData, updateData, deleteData };