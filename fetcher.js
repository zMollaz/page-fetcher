const request = require('request');
const fs = require('fs');
const page = process.argv.slice(2);
const address = page[0];
const somePath = page[1];

const pageFetcher = function() {
  request(`${address}`, (error, response, body) => {
    fs.writeFile(`${somePath}`, body, err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${somePath}.`);
    });
  });
};
pageFetcher();