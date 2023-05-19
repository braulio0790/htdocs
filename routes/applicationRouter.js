
//Call packages
const express = require('express');
const router = require('express').Router();
const contacts = require('../controllers/contacts');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

//Route the path
router.get('/contacts', contacts.getAllData);
router.get('/contacts/:id', contacts.getSingle);
router.post('/contacts/insert', contacts.insertData);
router.put('/contacts/update/:id', contacts.updateData);
router.delete('/contacts/delete/:id', contacts.deleteData);
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));
/*
router.use(
    '/',
    (docData = (req, res) => {
      let docData = {
        documentationURL: 'https://nathanbirch.github.io/nathan-byui-api-docs',
      };
      res.send(docData);
    })
  );
 */ 

module.exports = router;