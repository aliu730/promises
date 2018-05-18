/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var pluckFirstLineFromFileAsync = require('./promiseConstructor.js').pluckFirstLineFromFileAsync;
var getGitHubProfileAsync = require('./promisification.js').getGitHubProfileAsync;


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  pluckFirstLineFromFileAsync(readFilePath)
    .then((username) => {
      console.log(username);
      return getGitHubProfileAsync(username);
    })
    .then((jsonData) => {
      // console.log("lersr");

      return new Promise(function(resolve, reject) {

        fs.writeFile(writeFilePath, (err) => {
          if (err) {
            reject(err);
          }
          resolve();
        });

      });
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
