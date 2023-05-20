const swaggerAutogen = require('swagger-autogen')();
//const swaggerUi = require('swagger-ui');

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Personal activity week 4',
  },
  host: 'cse341-ns.onrender.com',
  schemes: ['https'],
};
//This file contains what is going to be shown in certain parts of the UI swagger testing page
const outputFile = './swagger.json';
//This file is requesting the main js file to show the general routes. probably is used by the swagger libray too.
const endpointsFiles = ['./routes/applicationRouter.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);