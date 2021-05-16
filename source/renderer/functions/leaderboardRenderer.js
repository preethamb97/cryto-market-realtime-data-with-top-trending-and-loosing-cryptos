const api = require('../../library/query/api');
const global = require('../../global/html');
module.exports.leaderBoardRenderer = async () => {
  let leaderBoardData = await api.leaderboard();
  let html = '';
  html += global.BOOSTRAP.TABLE.TABLE_START;
  html += global.BOOSTRAP.TABLE.TABLE_CAPTION.replace(global.SEARCH_REGEX, 'Top Gainers');
  html += global.BOOSTRAP.TABLE.TABLE_HEADER_START;
  html += global.BOOSTRAP.TABLE.TABLE_ROW_START;

  let headerFind = leaderBoardData.top_gainers[0];
  let keys = Object.keys(headerFind);
  keys.map(key => {
    html += global.BOOSTRAP.TABLE.TABLE_HEADER_CELL_START.replace(global.SEARCH_REGEX, 'col');
    html += key;
    html += global.BOOSTRAP.TABLE.TABLE_HEADER_CELL_END;
  });
  html += global.BOOSTRAP.TABLE.TABLE_ROW_END;
  html += global.BOOSTRAP.TABLE.TABLE_HEADER_END;

  html += global.BOOSTRAP.TABLE.TABLE_BODY_START;
  leaderBoardData.top_gainers.map(topGainer => {
    html += global.BOOSTRAP.TABLE.TABLE_ROW_START;
    keys.map(key => {
      html += global.BOOSTRAP.TABLE.TABLE_HEADER_CELL_START.replace(global.SEARCH_REGEX, 'row');
      html += topGainer[key];
      html += global.BOOSTRAP.TABLE.TABLE_HEADER_CELL_END;
    });
    html += global.BOOSTRAP.TABLE.TABLE_ROW_END;
  });
  html += global.BOOSTRAP.TABLE.TABLE_ROW_END;
  html += global.BOOSTRAP.TABLE.TABLE_BODY_END;

  html += global.BOOSTRAP.TABLE.TABLE_END;
  return html;
};
