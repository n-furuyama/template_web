"use strict"

const gulp        = require('gulp'),
      config      = require('../config'),
      $           = require('./plugins');

// copy
gulp.task('copy', () => {
	return gulp.src(config.copy.src)
		.pipe($.changed(config.paths.destDir))
		.pipe($.convertEncoding({to: config.convertEncoding.to}))
		.pipe(gulp.dest(config.paths.destDir))
		.pipe($.browserSync.stream());
});
