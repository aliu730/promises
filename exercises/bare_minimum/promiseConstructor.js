/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {

  return new Promise(function(resolve, reject) {
    
    fs.readFile(filePath, function(err, content) {
      if (err) {
        reject(err);
      }
      var contentArray = (content + '').split('\n');
      resolve(contentArray[0]);
    });
  });
  
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  // write a new promise (resolve, reject)
  // request the url with function error, response, body 
  //   if error we reject
  //   else resolve response.statusCode
  //   else resolve body
  return new Promise(function(resolve, reject) {
    request(url, function(error, response, body) {
      if (error) {
        reject(error);
      }
      resolve(response.statusCode);
    });
  });
};
// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
