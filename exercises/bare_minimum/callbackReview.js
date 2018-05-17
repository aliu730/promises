/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  //use fs readfile on filePath then open func
  //  listen for err and content
  //  on error 
  //   console error and return error
  //  on content
  //   split content by newline
  //   return the first in the array;
  fs.readFile(filePath, function(error, content) {
    if (error) {
      console.error(error);
      callback(error);
      // console.log() is unbiased
      // console.info() is informative, but not critical
      // there is also console.warn() and console.error()
    }
    var contentArray = (content + '').split('\n');
    callback(null, contentArray[0]);
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request(url, function (error, response, body) {
    if (error) {
      console.error(error);
      callback(error);
    } else if (response) {
      callback(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
