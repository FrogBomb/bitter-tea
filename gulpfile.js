var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var del = require('del');
var useref = require('gulp-useref');
var concat = require('gulp-concat');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');

//gulp.task(
//	'watch',
//	function () {
//		watch('./**/*', function (events) {
//			gulp.start('default');
//		});
//	}
//);

gulp.task('handlebars', ['clean'], function(){
  gulp.src('./lib/handlebars/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'RadioWars.templates',
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(concat('hbsTemplates.js'))
//  	.pipe(uglify())
    .pipe(gulp.dest('lib/js/handlebars'));
});

gulp.task('clean', function(){
    return del(['./dist/index.html', './dist/scripts/*', './dist/css/*']);
});


gulp.task('moveHTML',['clean'], function(){
    return gulp.src('./html/*.html')
        .pipe(gulp.dest('dist'));
});


gulp.task('combineJS', ['clean', 'handlebars'], function(){
    return gulp.src('./lib/**/*.js')
        .pipe(concat('combined.js'))
//        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts/'));

});

gulp.task('combineCSS', function(){
    return gulp.src('./css/**/*.css')
        .pipe(concat('combined.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('putUtilInTests', function(){
    return gulp.src('./lib/utilities/*.js')
        .pipe(gulp.dest('tests'));
});

gulp.task('default', ['clean','handlebars','combineJS', 'combineCSS', 'moveHTML']);
