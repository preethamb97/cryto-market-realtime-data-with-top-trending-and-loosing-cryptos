const apiReqester = require('./source/library/query/request');
const global = require('./source/global');
const settings = require('./source/config/config');

let res = async () => {
  let url = global.API_ENDPOINTS[settings.API_CONFIGURATION_TYPE].BASE_ENDPOINT + '/' + global.API_ENDPOINTS[settings.API_CONFIGURATION_TYPE].MARKET_LEADERBOARD;
  let data = await apiReqester.API_REQUEST(url, {});
  console.log(data)
}

res();
