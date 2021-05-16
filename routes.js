const express = require('express');
var router = express.Router();
const global = require('./source/global');
const api = require('./source/library/query/api');
const fs = require('fs');
const rendererLeaderboardFunctions = require('./source/renderer/functions/leaderboardRenderer');

const routes = [{
  endpoint: global.APP_ENDPOINTS.LEADERBOARD,
  type: global.ROUTE_TYPE.API,
  path: '',
  method: global.API_REQUEST_METHOD.GET,
  function_name: api.leaderboard
}, {
  endpoint: global.APP_ENDPOINTS.HOME,
  type: global.ROUTE_TYPE.HTML,
  path: `${__dirname}` + '/source/renderer/pages/leaderboard.html',
  method: global.API_REQUEST_METHOD.GET,
  function_name: rendererLeaderboardFunctions.leaderBoardRenderer
}];

routes.map(async route => {
  switch (route.type) {
    case global.ROUTE_TYPE.API:
      router.get(route.endpoint, async (req, res) => {
        let result = await route.function_name();
        res.status(200);
        res.send(result);
      });
      break;
    case global.ROUTE_TYPE.HTML:
      router.get(route.endpoint, async (req, res) => {
        let leaderboardRendererData = await route.function_name();
        fs.readFile(route.path, null, (error, data) => {
          if (error) {
            res.sendFile(`${__dirname}` + '/source/renderer/pages/pageNotFound.html');
          } else {
            data = data.toString().replace(global.SEARCH_REGEX, leaderboardRendererData);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
          }
        });
      });
      break;
  }
});

router.get('*', function (req, res) {
  res.sendFile(`${__dirname}` + '/source/renderer/pages/pageNotFound.html');
});

module.exports = router;
