
//Call packages
const express = require('express');
const router = require('express').Router();
const professional = require('../controllers/professional');
const contacts = require('../controllers/contacts');

//Route the path
router.get('/professional', professional.getData);
router.get('/contacts', contacts.getAllData);
router.get('/contacts/:id', contacts.getSingle);

module.exports = router;