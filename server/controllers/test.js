'use strict';

exports.getTest = (req, res, next) => {
  console.log('req.body is: ');
  console.log(req.body);
  console.log('-------');

  res.send('this is some test text!');
};
