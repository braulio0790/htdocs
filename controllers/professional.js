const mongodb = require('../mongoDB/conectionDB');
//This code connect the DB, request info from the collection, loop it, construct a JSON , give a good response, and export function
const getData = async (req,res,next) => {
    const result = await mongodb.getDb().db().collection('professional').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]); //we just need the first one (the only one)
    });
};

module.exports = {getData};