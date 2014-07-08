
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var addVideo = require('./routes/addVideo');
var listVideos = require('./routes/listVideos');
var UploadFile = require('./routes/uploadFile');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.limit(10000000000));
app.use(express.bodyParser());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/addVideo', addVideo.addVideo);
app.get('/listVideos', listVideos.list);
app.post('/UploadFile', UploadFile.upload);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});