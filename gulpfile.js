var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify');
    connect = require('gulp-connect');

// Start a web server (requirement to test with Protractor)
gulp.task('connect', function() {
  connect.server({
    port: 8000
  });
});

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('default', ['connect']);

gulp.task('scripts', function() {
  return gulp.src('src/**/*.js')
             .pipe(jshint('.jshintrc'))
             .pipe(jshint.reporter('default'))
             .pipe(concat('angular-initial-value.js'))
             .pipe(gulp.dest('dist/'))
             .pipe(rename({suffix: '.min'}))
             .pipe(uglify())
             .pipe(gulp.dest('dist/'))
             .pipe(notify({ message: 'Scripts task complete' }));
});