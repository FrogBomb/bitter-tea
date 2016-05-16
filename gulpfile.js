var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var del = require('del');
var useref = require('gulp-useref');

gulp.task('useref',['clean'], function(){
  return gulp.src('html/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    //    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});

gulp.task('clean', function(){
    return del('./dist/**');
});

//gulp.task('', function(){
//    return gulp.src(
//});

gulp.task('default', ['useref']);