'use strict';

const devmode = process.env.NODE_ENV === 'development';

exports.BASE_URL = devmode ? 'http://localhost:8080/api' : 'https://mr-robot-bmg.herokuapp.com/api';
