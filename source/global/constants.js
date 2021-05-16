module.exports.API_CONFIGURATION_TYPES = {
  COIN_MARKET_CAP: 1,
  COIN_DCX: 2
};

module.exports.API_REQUEST_METHOD = {
  GET: 'get',
  POST: 'post'
};

module.exports.ROUTE_TYPE = {
  HTML: 1,
  API: 2
};

module.exports.ROUTES = {
  HTML: 'html',
  API: 'api'
};

module.exports.RATE_LIMITER = {
  MAX_REQUEST: 200,
  LIMIT_EXPIRY_TIME: 1000 * 60
};

module.exports.EXECUTION_SERVER_TYPE = {
  POSTMAN: 1,
  LOCALHOST: 2,
  SERVER: 3
};
