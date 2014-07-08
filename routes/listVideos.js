
/*
 * GET users listing.
 */

var DB = require('./DB.js');

exports.list = function(req, res){
  DB.listDB(req, res);
};