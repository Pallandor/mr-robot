'use strict';

const axios = require('axios');
const config = require('./config');

exports.postUsername = username =>
  axios.post(`${config.BASE_URL}/username`, {username: username})
    .then(response => response.data);
