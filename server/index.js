const express = require('express');
const next = require('next');
const routes = require('../routes.js');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = routes.getRequestHandler(app);
const ParseServer = require('parse-server').ParseServer;
const ParseDashBoard = require('parse-dashboard');

// With express

const dashboard = ParseDashBoard({
  apps: [
    {
      serverURL: 'http://localhost:3000/parse',
      appId: 'myAppId',
      masterKey: 'myMasterKey',
      appName: 'MyApp',
    },
  ],
});

app
  .prepare()
  .then(() => {
    const server = express();

    server.use('/dashboard', dashboard);
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.use(handle).listen(3000, (err) => {
      if (err) throw err;
      console.log('Server is no on 3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
