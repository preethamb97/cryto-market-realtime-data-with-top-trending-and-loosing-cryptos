const constants = require('./constants');
const endpoints = require('./endpoints');
const functions = require('./functions');
const html = require('./html');
module.exports =  {
  ...constants, 
  ...endpoints, 
  ...functions,
  ...html
}
