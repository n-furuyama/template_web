"use strict"

const gulp        = require('gulp'),
      config      = require('../config'),
      $           = require('./plugins');

// imagemin
gulp.task('imagemin', () => {
	// watchのときはコピーのみ
	if (config.states.watching) {
		return gulp.src(config.imagemin.src)
			.pipe($.plumber())
			.pipe($.changed(config.paths.destDir))
			.pipe($.debug({title: 'unicorn:'}))
			.pipe(gulp.dest(config.paths.destDir))
			.pipe($.browserSync.stream());
	}
	// gulp build
	else {
		return gulp.src(config.imagemin.src)
			.pipe($.plumber())
			.pipe($.changed(config.paths.destDir))
			.pipe($.imagemin(config.imagemin.options))
			.pipe(gulp.dest(config.paths.destDir))
			.pipe($.browserSync.stream());
	}
});
