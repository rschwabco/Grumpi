var gulp = require('gulp'),
  less = require('gulp-less'),
  sourcemaps = require('gulp-sourcemaps'),
  livereload = require('gulp-livereload'),
  handleErrors = require('../util/handleErrors'),
  config =  {
        src: './application/core/client/styles/less/core.less',
        dest: './public/dist'
    };

gulp.task('styles', function() {
    return gulp.src(config.src)
      .pipe(sourcemaps.init())
      .pipe(less())
      .on('error', handleErrors)
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.dest))
      .pipe(livereload())

});
