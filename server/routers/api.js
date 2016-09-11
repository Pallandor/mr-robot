'use strict';

const express = require('express');
const apiRouter = express.Router();

/** Route handlers **/
const tableRoutes = require('../routes/table');

/** API routes **/
apiRouter.post('/username', tableRoutes.postUsername);
// apiRouter.get('/command', tableController);

module.exports = apiRouter;
