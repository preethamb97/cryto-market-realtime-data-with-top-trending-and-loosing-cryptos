const api = require('../../library/query/api');
const global = require('../../global/html');
module.exports.leaderBoardTopGainerRenderer = async (data) => {
  let leaderBoardData = await api.leaderboard();
  let allHtmlData = '';
  data.map(param => {
    allHtmlData += this.tableRenderer(param, leaderBoardData[param]);
  })
  return allHtmlData;
};

module.exports.tableRenderer = (tableHeader, tableData) => {
  let html = '';
  html += global.BOOSTRAP.TABLE.TABLE_START;
  html += global.BOOSTRAP.TABLE.TABLE_CAPTION.replace(global.SEARCH_REGEX, tableHeader);
  html += global.BOOSTRAP.TABLE.TABLE_HEADER_START;
  html += global.BOOSTRAP.TABLE.TABLE_ROW_START;

  const keys = Object.keys(tableData[0]);
  keys.map(key => {
    html += global.BOOSTRAP.TABLE.TABLE_HEADER_CELL_START.replace(global.SEARCH_REGEX, 'col');
    html += key;
    html += global.BOOSTRAP.TABLE.TABLE_HEADER_CELL_END;
  });
  html += global.BOOSTRAP.TABLE.TABLE_ROW_END;
  html += global.BOOSTRAP.TABLE.TABLE_HEADER_END;

  html += global.BOOSTRAP.TABLE.TABLE_BODY_START;
  tableData.map(data => {
    html += global.BOOSTRAP.TABLE.TABLE_ROW_START;
    keys.map(key => {
      html += global.BOOSTRAP.TABLE.TABLE_HEADER_CELL_START.replace(global.SEARCH_REGEX, 'row');
      html += data[key];
      html += global.BOOSTRAP.TABLE.TABLE_HEADER_CELL_END;
    });
    html += global.BOOSTRAP.TABLE.TABLE_ROW_END;
  });
  html += global.BOOSTRAP.TABLE.TABLE_ROW_END;
  html += global.BOOSTRAP.TABLE.TABLE_BODY_END;

  html += global.BOOSTRAP.TABLE.TABLE_END;
  return html;
};
