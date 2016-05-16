var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var del = require('del');
var useref = require('gulp-useref');
var concat = require('gulp-concat');

gulp.task(
	'watch',
	function () {
		watch('./**/*', function (events) {
			gulp.start('default');
		});
	}
);

gulp.task('useref',['clean'], function(){
  return gulp.src('html/*.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'))
});

gulp.task('clean', function(){
    return del(['./dist/index.html', './dist/scripts/*', './dist/css/*']);
});

gulp.task('combineJS', ['clean'], function(){
    return gulp.src('./lib/**/*.js')
        .pipe(concat('combined.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts/'));
});

gulp.task('combineCSS', function(){
    return gulp.src('./css/**/*.css')
        .pipe(concat('combined.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['clean','combineJS', 'combineCSS']);

