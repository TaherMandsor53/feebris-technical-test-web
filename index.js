const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send('Hello world!');
});

const server = app.listen(3000, () => {
  console.log('⚙️ feebris-technical-test2 listening at http://localhost:3000')
});

module.exports = server;
