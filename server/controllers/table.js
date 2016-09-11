'use strict';

const Table = require('../models/Table');
const Robot = require('../models/Robot');

exports.postUsername = (req, res, next) => {
  let username = req.body.username;

  // console.log('USERNAME at beginnign of postusername is: ', req.body.username);
  // START EXPORTING TO dbControllers vs routeControllers (this which houses route specific logic)
  // check if username already exists against robot
  Robot.findOne({'master': username})
    .then(existingRobot => {
      // if username exists, return tableId, username
      if (existingRobot) {
        console.log('--- FOUND EXISTING USER WITH THAT USERNAME ---');
        Table.findOne({'robots': existingRobot.id}) // NOTE: Assumes robot._id accesses Mongo/mongoose object id???
        .then(existingTable => {
          res.status(200).json({
            tableId: existingTable.id, // NOTE: possible id/objectid issue!
            username: username,
          });
          next();
          return; // break
        });
        // catch
      } else {
      // else if username doesnt exist (i.e. no existing robot with master of that username)
      console.log("--- THAT USERNAME WASN'T TAKEN YET! --- ");
        // find availble table (thats not robot maxed out) and assign user to it
        Table.findOne({$where: 'this.robots.length < this.robotLimit' })
          .then(availableTable => {
            if (availableTable) {
              console.log('--- FOUND AVAILABLE TABLE! ---');
              // add robot to available table
                // create robot with username

                new Robot({
                  'master': username,
                }).save((err, newRobot) => {
                  if (err) {
                    console.log(' --- SOME ERROR LINE 42: ', err);
                    res.send('err!!!!');
                    next();
                    return;
                    // res.json(err);
                    // next();
                    // return;
                    // throw new Error('issue creating robot')// handle err properly!!
                  }
                  availableTable.robots.push(newRobot.id);
                  availableTable.save((err, updatedTable) => {
                    if (err) {
                      console.log(' --- SOME ERROR LINE 52: ', err);
                      res.send('err!!!!!');
                      next();
                      return;
                    }
                    res.status(200)
                      .json({
                        tableId: updatedTable.id,
                        username: username,
                      });
                    next();
                    return;
                  });
                });

            } else {
            console.log(" -- NO AVAILABLE TABLE FOUND --");
            // else create new robot, then new table to house robot, then...
           console.log('-- soo CREATING NEW ROBOT ---');
            new Robot({
              master: username,
            }).save((err, newRobot) => {

              if (err) {
                console.log('-- SOM ERR LINE 76', err);
                next();
                // throw new Error('issue creating robot!')// TODO: Handle err better (pass info back to API consumer)
              }
              console.log('-- aamd creating NEW TABLE --');
              new Table({
                robots: [newRobot.id],
                currentUsersTurn: username,
              }).save((err, newTable) => {
                if (err) throw new Error('issue creating table!') // TODO:
                res.status(200).json({
                  tableId: newTable.id,
                  username: username,
                });
                next();
                return;
              });

          });
        }
      });
    }
  });
};
