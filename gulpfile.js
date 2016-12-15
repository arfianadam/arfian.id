var gulp = require('gulp'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglify');

var jsPath = './js/';
var watchFiles = [
	jsPath + 'main.js'
]
var jsFiles = [
	jsPath + 'jquery-3.1.1.min.js',
	jsPath + 'parallax.min.js',
	jsPath + 'main.js',
]

gulp.task('default', ['buildjs', 'watch'], function() {});

gulp.task('buildjs', function() {
	return gulp.src(jsFiles)
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(jsPath));
})

gulp.task('watch', function() {
	return gulp.watch(watchFiles, ['buildjs']);
})