
//Call packages
const router = require('express').Router();
const mongodb = require('../mongoDB/conectionDB');
//Call your files
const professional = require('../controllers/professional');

router.get('/professional', professional.getData);

module.exports = router;