
/*
 * GET users listing.
 */


var ffmpeg = require('fluent-ffmpeg');
var DB = require('./DB.js');


function _videoConverter(filePath, fileName, format) {

  console.log(format);
  
  var status = null;
 
  for (var i = 0; i < format.length; i++) {
    var video = new ffmpeg({ source: filePath })
        .saveToFile('./public/videos/convertedData/'+ format[i] +'/'+ fileName + '.' + format[i])
        .withSize('320x?')
        .keepPixelAspect(true)
        .withFpsOutput(24)
        .on('start', function(commandLine) {
          console.log('Spawned FFmpeg with command: ' + commandLine);
        })
        .on('progress', function(progress) {
          console.log(progress, 'Processing: ' + parseInt(progress.percent) + '% done');
        })
        .on('codecData', function(data) {
          console.log('Input is ' + data.audio + ' audio with ' + data.video + ' video');
        })
        .on('error', function(err) {
          console.log('Cannot process video: ' + err.message);
        })
        .on('end', function() {
          console.log('Processing finished successfully - ', format[i]);
        });
  }
  var data = {
    video : {
      title : fileName,
      path : { 
        ogg : '/videos/convertedData/ogg/'+ fileName + '.ogg',
        mp4 : '/videos/convertedData/mp4/'+ fileName + '.mp4',
      }
    }
  };

  DB.saveDB(data);
};

exports.converter = function(filePath, fileName){
  _videoConverter(filePath, fileName, ['mp4', 'ogg']);
};