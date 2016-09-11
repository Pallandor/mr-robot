'use strict';

const emoji = require('node-emoji');

const whale = emoji.get('whale');
const dog = emoji.get('dog');
const bear = emoji.get('bear');
const hamster = emoji.get('hamster');
const frog = emoji.get('frog');
const unicorn_face = emoji.get('unicorn_face')
const bicyclist = emoji.get('bicyclist');
const bangbang = emoji.get('bangbang');
const open_mouth = emoji.get('open_mouth');

exports.gamePrompt = `${whale} ${frog} ${hamster}  Mr-Robot-Prompt ${unicorn_face} ${bicyclist} ${dog}`;
exports.welcome = `${whale} ${bear} ${dog}  Welcome! ${bicyclist} ${frog} ${hamster}  Please provide a new or existing username: \n`;
exports.usernameOrApiError = `\n ${bangbang}  An error occurred${bangbang}  Please try again giving a new or existing username: \n`;
exports.emptyUsername = ` ${bangbang}  Username must not be empty${bangbang}  Please try again giving a new or existing username: \n`;
exports.loading = `\n\nLoading ........... ${open_mouth}\n    ${open_mouth}...........\n       ...........${open_mouth}`;

exports.usernameSuccess = (username, tableId) => `\n${unicorn_face}  Thanks!${unicorn_face}\n\nUsername is currently set to: ${username}, on table: ${tableId} \n`;
