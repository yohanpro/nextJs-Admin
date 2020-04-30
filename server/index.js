const express = require('express');
const next = require('next');
const routes = require('../routes.js');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = routes.getRequestHandler(app);
const config = require('./config');

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => {
      return handle(req, res);
    });
    const PORT = config.PORT;

    server.use(handle).listen(PORT, (err) => {
      if (err) throw err;
      console.log(`Server is no on ${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
