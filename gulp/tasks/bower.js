"use strict"

const gulp        = require('gulp'),
      config      = require('../config'),
      $           = require('./plugins');

/**
 * bower:js
 */
gulp.task('bower:js', () => {
	let fileFilter = $.filter('**/*.js', {restore: true}),
			destDir = config.paths.destDir+'assets/js/';

	return gulp.src($.bower())
		.pipe($.plumber())
		.pipe(fileFilter)
		.pipe($.concat('libs.js'))
		.pipe($.uglify({preserveComments: 'some'}))
		.pipe($.rename({suffix: '.min'}))
		.pipe(gulp.dest(destDir))
		.pipe(fileFilter.restore);
});


/**
 * bower:css
 */
 gulp.task('bower:css', () => {
	let fileFilter = $.filter('**/*.css', {restore: true}),
			destDir = config.paths.destDir+'assets/css/';

	return gulp.src($.bower())
		.pipe($.plumber())
		.pipe(fileFilter)
		.pipe($.concat('libs.css'))
		.pipe($.cssmin({preserveComments: 'some'}))
		.pipe($.rename({suffix: '.min'}))
		.pipe(gulp.dest(destDir))
		.pipe(fileFilter.restore);
});



/**
 * import
 */
gulp.task('bower', ['bower:js', 'bower:css']);
