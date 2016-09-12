# mr-robot
Multiplayer turn-based battleships style game (but with robots!)
(To be) hosted with Node/Express API and MongoDB/Mongoose, with Node CLI client.

*Currently in progress* :penguin:
*Initial partial API live* :bear:
> `https://mr-robot-bmg.herokuapp.com/api/username`

[![Travis CI Build Status](https://travis-ci.org/Pallandor/mr-robot.svg?branch=master)](https://travis-ci.org/Pallandor/mr-robot)

## Installation and Live Play
```bash
npm install
npm run game
```

### Development (Client & Server)

```bash
npm run dev:server
npm run dev:client
```
This runs a Node app as client through the CLI in development mode.
Express server on the back-end with mongoDB to manage game state and APIs.
Assumes available local server and mongoDB connection at `mongodb://localhost:27017/robotdb`.

### Production (Client & Server)

```bash
npm start
npm run game
```
Starts production mode server and live-play client.

### Tests
```bash
npm run dev:test
npm run test
```
Runs through linting and (current) Mocha and Chai test suites (low coverage back-end only).
Development and production modes available.
Production build runs through test suites vis Travis CI/Heroku pipeline on git push to master branch.
