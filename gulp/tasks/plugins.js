"use strict"

let loader        = require('gulp-load-plugins');
let browserSync   = require('browser-sync').create();
let runSequence   = require('run-sequence');
let pngquant      = require('imagemin-pngquant');
let sassGraph     = require('sass-graph');
let bower         = require('main-bower-files');

let $ = loader({
	pattern: ['gulp-*', 'gulp.*'],
	replaceString: /^gulp(-|\.)/
});

$.browserSync   = browserSync;
$.runSequence   = runSequence;
$.pngquant      = pngquant;
$.sassGraph     = sassGraph;
$.bower         = bower;


module.exports = $;
