"use strict"

const gulp        = require('gulp'),
      config      = require('../config'),
      $           = require('./plugins');

gulp.task('server', () => {
	$.browserSync.init(config.browserSync);
});
