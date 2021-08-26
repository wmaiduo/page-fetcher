const URL = process.argv[2];
const localPath = process.argv[3];

const fs = require('fs');

const request = require('request');
request(`https://www.${URL}`, (error, response, body) => {
  console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
});