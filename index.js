const express = require('express');
const app = express();
const careHomeData = require('./data/care_homes.json');
const patientDetailsData = require('./data/patients.json');
const patientGpPracticeData = require('./data/gp_practices.json');
const patientGpPracticeIdData = require('./data/gp_practices_patients.json');
const checkupData = require('./data/checkups.json');

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

const filterPatinetGpPracticeData = patientGpPracticeIdData.map(item => {
  const filterPatientPractice = patientGpPracticeData.filter(element => element.id === item.gpPracticeId);
  const filterCheckupData = checkupData.filter(checkup => checkup.patientId === item.gpPracticeId);
  return {
    patientId: item.patientId,
    patientPracticeDetails: filterPatientPractice && filterPatientPractice,
    patientCheckupDetails: filterCheckupData && filterCheckupData,
  };
});

app.get('/getGpPracticeDetails', (req, res) => {
  res.json(filterPatinetGpPracticeData);
});

const server = app.listen(3001, () => {
  console.log('⚙️ feebris-technical-test2 listening at http://localhost:3001');
});

module.exports = server;
