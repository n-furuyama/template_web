"use strict"

const gulp        = require('gulp'),
      config      = require('../config'),
      $           = require('./plugins');

gulp.task('watch', () => {
	config.states.watching = true;

	gulp.watch(config.imagemin.src, ['imagemin'], $.browserSync.reload);
	gulp.watch(config.jade.src, ['jade'], $.browserSync.reload);
	gulp.watch(config.sass.src, ['sass'], $.browserSync.reload);
	gulp.watch(config.copy.src, ['copy'], $.browserSync.reload);
	gulp.watch(config.js.src, ['js'], $.browserSync.reload);
	gulp.watch(config.js.lib, ['jsConcat'], $.browserSync.reload);
});
