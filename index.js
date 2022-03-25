const express = require('express');
const app = express();
const careHomeData = require('./data/care_homes.json');
const patientDetailsData = require('./data/patients.json');

const cors = require('cors');
app.use(
  cors({
    origin: ['http://localhost:3000', 'http:localhost:3001'],
  }),
);

app.get('/getCareHome', (req, res) => {
  res.json(careHomeData);
});

app.get('/getPatientDetails', (req, res) => {
  res.json(patientDetailsData);
});

const server = app.listen(3001, () => {
  console.log('⚙️ feebris-technical-test2 listening at http://localhost:3001');
});

module.exports = server;
