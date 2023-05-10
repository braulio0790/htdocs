
//Call packages
const express = require('express');
const router = require('express').Router();
const professional = require('../controllers/professional');
const contacts = require('../controllers/contacts');

//Route the path
router.get('/professional', professional.getData);
router.get('/contacts', contacts.getAllData);
router.get('/contacts/:id', contacts.getSingle);
router.post('/contacts/insert', contacts.insertData);
router.put('/contacts/update/:id', contacts.updateData);
router.delete('/contacts/delete/:id', contacts.deleteData);

module.exports = router;