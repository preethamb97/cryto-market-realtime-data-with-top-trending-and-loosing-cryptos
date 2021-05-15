const apiReqester = require('./request');
const global = require('../../global');
const settings = require('../../config/config');

module.exports.leaderboard = async () => {
  try {
    let url = global.API_ENDPOINTS[settings.API_CONFIGURATION_TYPE].BASE_ENDPOINT + '/' + global.API_ENDPOINTS[settings.API_CONFIGURATION_TYPE].MARKET_LEADERBOARD;
    let data = await apiReqester.API_REQUEST(url, {});
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
