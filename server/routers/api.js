'use strict';

const express = require('express');
const apiRouter = express.Router();

/** Route handlers **/
const tableRoutes = require('../routes/table');

/** API routes **/
apiRouter.post('/username', tableRoutes.postUsername);


// apiRouter.get('/command', tableController);
// apiRouter.post('/command', apiController.getNewYorkTimes);

module.exports = apiRouter;
