/*
*
*  Code from @rmdias - Github
*  url - https://github.com/rmdias/gulp-web-app-workflow/
*
*/

var gulp = require('gulp');
var gutil = require('gulp-util');
var pkg = require('./package.json');
var sass = require('gulp-ruby-sass');
var map = require('map-stream');

var _assets = './_assets';
var _distSrc = './public';

// tasks

// { sass }
gulp.task('sass', function() {
  var sassFiles =  _assets + '/_stylesheets/app.sass';
  var sassDist =  _distSrc + '/stylesheets';
  var compileConf = {unixNewlines: true, style: 'compressed'};

  gulp.src(sassFiles)
    .pipe(sass(compileConf))
    .pipe(gulp.dest(sassDist));
});

// The default task (called when you run `gulp`)
gulp.task('default', function() {
  gulp.run(['sass']);

  gulp.watch( _assets + '/_stylesheets/**/*', function() {
      var date = new Date(),
          hour = date.getHours(),
          minutes = date.getMinutes(),
          seconds = date.getSeconds(),
          buildTime = hour + ':' + minutes + ':' + seconds;

      gulp.run('sass', function() {
          gutil.log(gutil.colors.blue('------------- SASS! -------------'), gutil.colors.green('( Last time -', buildTime, ')'));
      });
  });
});