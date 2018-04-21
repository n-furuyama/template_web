"use strict"

const gulp        = require('gulp'),
      config      = require('../config'),
      $           = require('./plugins');


// sass
gulp.task('sass', () => {
	return gulp.src(config.sass.src)
		.pipe($.plumber({
			errorHandler: function(err) {
				console.log(err.messageFormatted);
				return this.emit('end');
			}
		}))
		.pipe($.cached('sass'))
		.pipe($.dependents())
		.pipe($.sourcemaps.init())
		.pipe($.sass(config.sass.options))
		.pipe($.pleeease(config.pleeease.options))
		.pipe($.csscomb())
		.pipe($.replace(config.sass.encodingFrom, config.sass.encodingTo))
		.pipe($.rename( (path) => {
			var newPath = path.dirname;
			path.dirname = newPath.replace(/scss/g, 'css');
			return path;
		}))
		.pipe($.convertEncoding({to: config.convertEncoding.to}))
		.pipe($.sourcemaps.write(config.sourcemaps.path, config.sourcemaps.options))
		.pipe(gulp.dest(config.paths.destDir))
		.pipe($.browserSync.stream());
});
