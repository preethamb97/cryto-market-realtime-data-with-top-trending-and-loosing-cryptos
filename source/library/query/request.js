const axios = require('axios');
const global = require('../../global');

module.exports.API_REQUEST = async (url, data, METHOD = global.API_REQUEST_METHOD.GET) => {
  try {
    let res = await axios({
      method: METHOD,
      url: url,
      data: data
    });
    return res.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
