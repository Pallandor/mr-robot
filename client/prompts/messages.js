'use strict';

const emoji = require('node-emoji');

const whale = emoji.get('whale');
const dog = emoji.get('dog');
const bear = emoji.get('bear');
const hamster = emoji.get('hamster');
const frog = emoji.get('frog');
const unicornFace = emoji.get('unicornFace');
const bicyclist = emoji.get('bicyclist');
const bangbang = emoji.get('bangbang');
const openMouth = emoji.get('openMouth');

exports.gamePrompt = `${whale} ${frog} ${hamster}  Mr-Robot-Prompt ${unicornFace} ${bicyclist} ${dog}`;
exports.welcome = `${whale} ${bear} ${dog}  Welcome! ${bicyclist} ${frog} ${hamster}  Please provide a new or existing username: \n`;
exports.usernameOrApiError = `\n ${bangbang}  An error occurred${bangbang}  Please try again giving a new or existing username: \n`;
exports.emptyUsername = ` ${bangbang}  Username must not be empty${bangbang}  Please try again giving a new or existing username: \n`;
exports.loading = `\n\nLoading ........... ${openMouth}\n    ${openMouth}...........\n       ...........${openMouth}`;

exports.usernameSuccess = (username, tableId) => `\n${unicornFace}  Thanks!${unicornFace}\n\nUsername is currently set to: ${username}, on table: ${tableId} \n`;
