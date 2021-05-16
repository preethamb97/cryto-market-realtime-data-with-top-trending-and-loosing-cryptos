const global = require('../global');

module.exports.API_CONFIGURATION_TYPE = global.API_CONFIGURATION_TYPES.COIN_DCX;

module.exports.SERVER_PORT = 4000;

module.exports.SERVER_TYPE = global.EXECUTION_SERVER_TYPE.LOCALHOST;

module.exports.SERVER_URLS = {
  [global.EXECUTION_SERVER_TYPE.POSTMAN]: '{{url}}',
  [global.EXECUTION_SERVER_TYPE.LOCALHOST]: `http://localhost:${this.SERVER_PORT}`,
  [global.EXECUTION_SERVER_TYPE.SERVER]: 'http://ip',
};
