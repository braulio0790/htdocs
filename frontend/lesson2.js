//This is where my logic will take place
const path = require('path');
//Functions to display different names
const indexhtml = (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
  //res.send('Mariana Garcia');
};

module.exports = {
    indexhtml,
};