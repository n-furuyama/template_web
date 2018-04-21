"use strict"

const gulp        = require('gulp'),
      config      = require('../config'),
      del         = require('del'),
      $           = require('./plugins');

// clean
gulp.task('clean', () => {
	del.sync([config.paths.destDir, config.paths.mapDir] , {
    force:  true,
    dot:    true
	});
});
