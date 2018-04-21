"use strict"

const gulp        = require('gulp'),
      config      = require('../config'),
      $           = require('./plugins');


gulp.task('js', () => {
	// common連結
	let srcDir = config.paths.srcDir+'assets/js/common/**/*.js',
			destDir = config.paths.destDir+'assets/js/';

	gulp.src(srcDir)
		.pipe($.plumber())
		.pipe($.cached('js'))
		.pipe($.concat('common.js'))
		.pipe($.uglify({preserveComments: 'some'}))
		.pipe($.rename({suffix: '.min'}))
		.pipe($.convertEncoding({to: config.convertEncoding.to}))
		.pipe(gulp.dest(destDir))
		.pipe($.browserSync.stream());

	return gulp.src(config.js.src)
		.pipe($.plumber())
		.pipe($.cached('js'))
		.pipe($.convertEncoding({to: config.convertEncoding.to}))
		.pipe(gulp.dest(config.paths.destDir))
		.pipe($.browserSync.stream());
});
