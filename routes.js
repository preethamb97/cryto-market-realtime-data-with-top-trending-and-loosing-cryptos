const global = require('./source/global');
const routesArr = [{
  endpoint: global.APP_ENDPOINTS.LEADERBOARD,
  type: global.ROUTE_TYPE.API,
  path: '',
  method: global.API_REQUEST_METHOD.GET
}, {
  endpoint: global.APP_ENDPOINTS.HOME,
  type: global.ROUTE_TYPE.HTML,
  path: './source/renderer/pages/leaderboard.html',
  method: global.API_REQUEST_METHOD.GET
}];


module.exports = routesArr;
