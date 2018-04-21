"use strict"

const gulp        = require('gulp'),
      config      = require('../config'),
      $           = require('./plugins');


gulp.task('sprite', () => {
	var spriteData = gulp.src(config.sprite.src)
    .pipe($.spritesmith(config.sprite.options));

	spriteData.img.pipe(gulp.dest(config.sprite.destImg));
  spriteData.css.pipe(gulp.dest(config.sprite.destScss));
});
