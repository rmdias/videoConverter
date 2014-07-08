
/*
 * GET users listing.
 */

var videoConverter = require('./videoConverter.js');
var fs = require('fs');

function _UploadFile(req, res) {
  var filePath = __dirname + '/../public/videos/originalData/' + req.files.file.originalFilename;
  fs.readFile(req.files.file.path, function(err, data){
    fs.writeFile(filePath, data, function(err){
      if(err){ 
        console.log(err);
      }else{
        videoConverter.converter(filePath, req.files.file.originalFilename)
      }
    });
  });
};

exports.upload = function(req, res){
  _UploadFile(req, res);
};