'use strict';

const bluebird = require('bluebird');
const api = require('../api');
const userStore = require('../store');
const messages = require('./messages');
const helpers = require('../helpers');

const prompt = require('prompt');
prompt.message = messages.gamePrompt;

exports.promptUsername = () =>
  new Promise((resolve, reject) => {
    prompt.start();
    const usernameSchema = {
      properties: {
        username: {
          pattern: /^[a-zA-Z0-9]+$/,
          message: 'Name must be only letters or numbers, no spaces!',
          required: true,
        },
      },
    };
    console.log(messages.welcome);
    prompt.get(usernameSchema, (err, result) => {
      if (err) {
        console.log(messages.usernameOrApiError)
        reject(err);
      };
      console.log(messages.loading);
      api.postUsername(result.username)
        .then(response => {
          userStore.addUsername(response.username);
          userStore.addTableId(response.tableId);
          console.log(messages.usernameSuccess(response.username, response.tableId));
          resolve(response);
        })
        .catch(apiErr => {
          console.log(messages.usernameOrApiError);
          reject(apiErr);
        });
    });
  });
