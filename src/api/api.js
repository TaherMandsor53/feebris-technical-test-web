import axios from 'axios';

const baseURL = `http://localhost:3001`;

export const getCareHomeDetails = () => {
  console.log('api');
  const URL = `${baseURL}/getCareHome`;
  return axios.get(URL);
};

export const getPatientDetails = () => {
  const URL = `${baseURL}/getPatientDetails`;
  return axios.get(URL);
};

export const getPatientGpDetails = () => {
  const URL = `${baseURL}/getGpPracticeDetails`;
  return axios.get(URL);
};
