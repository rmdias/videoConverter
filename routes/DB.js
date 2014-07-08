
/*
 * GET users listing.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    db = mongoose.connection;

    mongoose.connect('mongodb://162.243.137.156:27017/videoConverter')
    
    db.on('error', function(err){
      console.log('Error.', err)
    });
    db.once('open', function () {
      console.log('Conected')
    });

var videoSchema = new Schema({
  video : {
    title : { type: String, default: '' },
    description : { type: String, default: '' },
    path : {
      ogg : { type: String, default: '' },
      mp4 : { type: String, default: '' }
    }
  }
});

var Videos = mongoose.model('videos', videoSchema);

function _saveDB(data){
  video = new Videos(data);

  video.save(function(err) {
    if(err){
      console.log(err);
    } else {
      console.log('Video Created!');
    }
  });
};

function _listDB (req, res) {
  Videos.find(function(err, videos) {
    if (err) {
      console.log('error');
    }else{
      res.json(videos);
    }
  });
}

exports.saveDB = function(data){
  _saveDB(data);
};
exports.listDB = function(res, req){
  _listDB(res, req);
};