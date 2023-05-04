//This is where my logic will take place
//Functions to display different names
const marianaGarcia = (req, res) => {
  res.send('Mariana Garcia');
};

const mariaOlvera = (req, res) => {
  res.send('Maria Olvera');
};

module.exports = {
    marianaGarcia,
    mariaOlvera,
};