const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const app = express();
const routes = require('./routes');
const morgan = require('morgan');
const helmet = require('helmet');

const { SERVER_PORT } = require('./source/config/config');
const global = require('./source/global');
app.use(helmet());
app.use(morgan('dev'));
// const server = https.createServer({key: privateKey, cert: certificate},app);


app.get('test' , (req, res) => {
  res.send(Date())
});
const server = http.createServer(app);
// console.log(routes.stack.map(routesData => routesData.route.path))
server.listen(SERVER_PORT, () => {
  console.log(`Server started at port : ${SERVER_PORT}`);
});

