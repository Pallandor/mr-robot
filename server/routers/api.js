'use strict';

const express = require('express');
const apiRouter = express.Router();

/** API Controllers (route handlers) **/
const testController = require('../controllers/test');
// const robotController = require('./controllers/robot');
// const tableController = require('./controllers/table');
// const tablesController = require('./controllers/tables');

/** API routes **/
apiRouter.get('/test', testController.getTest);
// apiRouter.get('/username', robotController.getUsername);
// apiRouter.get('/command', tableController);
// apiRouter.post('/command', apiController.getNewYorkTimes);

module.exports = apiRouter;
