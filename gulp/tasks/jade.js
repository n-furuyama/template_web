"use strict"

const gulp        = require('gulp'),
      config      = require('../config'),
      del         = require('del'),
      $           = require('./plugins');

gulp.task('jade', () => {
	return gulp.src(config.jade.src)
		.pipe($.plumber())
		.pipe($.cached('jade'))
		.pipe($.jade(config.jade.options))
		.pipe($.convertEncoding({to: config.convertEncoding.to}))
		.pipe(gulp.dest(config.paths.destDir))
		.pipe($.browserSync.stream());
});
