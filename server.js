const path = require('path');
const fs = require('fs');
const express = require('express');
// const bodyParser = require('body-parser');

function startServer(port, callback) {
  const app = express();

  app.set('port', port);
  app.use(express.static(path.join(__dirname, './public')));
  // app.use(bodyParser.json());

  const server = app.listen(app.get('port'));

  server.on('error', (error) => {
    console.error('Server error.', error);
    callback(error);
  });

  server.on('listening', () => {
    console.info(`Server running on port ${app.get('port')}.`);
    callback();
  });

  server.on('close', () => {
    console.info('Server stopped.');
  });

  return server;
}

startServer(3000, (error) => {
  if (error) {
    process.exit(1);
  }
});
