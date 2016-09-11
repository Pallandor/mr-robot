'use strict';

const express = require('express');
const apiRouter = express.Router();

/** API Controllers (route handlers) **/
// const robotController = require('../controllers/robot');
const tableController = require('../controllers/table');

/** API routes **/
apiRouter.post('/username', tableController.postUsername);
// apiRouter.get('/command', tableController);
// apiRouter.post('/command', apiController.getNewYorkTimes);

module.exports = apiRouter;
