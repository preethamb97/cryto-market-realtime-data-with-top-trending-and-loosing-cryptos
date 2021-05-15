const constants = require('./constants');
module.exports.API_ENDPOINTS = {
  [constants.API_CONFIGURATION_TYPES.COIN_MARKET_CAP] : {

  },
  [constants.API_CONFIGURATION_TYPES.COIN_DCX] : {
    BASE_ENDPOINT: 'https://api.coindcx.com/api/v1',
    MARKET_LEADERBOARD: 'market_leaderboard',
    CURRENCIES : 'currencies',
    TRENDING_PAIRS: 'trending_pairs',
  },
} 

module.exports.APP_ENDPOINTS = {
  LEADERBOARD: 'leaderboard',
  HOME: 'home'
}
