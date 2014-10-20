var gulp = require('gulp');

//////////////////////////////
// Begin Lint Tasks
//////////////////////////////
require('./tasks/jshint')(gulp, [
  'build/**/*.js',
  '!build/**/*.min.js'
]);

//////////////////////////////
// Begin Test Tasks
//////////////////////////////
require('./tasks/karma')(gulp);

//////////////////////////////
// Custom Tasks
//////////////////////////////
gulp.task('dev', ['jshint--dev', 'karma--dev']);
gulp.task('travis', ['karma']);
