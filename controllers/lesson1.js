//This is where my logic will take place
const path = require('path');
//Functions to display different names
const marianaGarcia = (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
  //res.send('Mariana Garcia');
};

const mariaOlvera = (req, res) => {
  res.send('Maria Olvera');
};

module.exports = {
    marianaGarcia,
    mariaOlvera,
};