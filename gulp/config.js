"use strict"

const $ = require('./tasks/plugins');


// ========================================
// sources
// ========================================
let sources =　{
  bower:  './bower.json'
};

// ========================================
// paths
// ========================================
const paths = {
  srcDir:       './src/',
  destDir:      './dest/',
  mapDir:       './map/',
  destRelease:  './destRelease/',
  proxy:        ''
};
module.exports.paths = paths;


// ========================================
// states
// ========================================
let states = {
	watching: false
};
module.exports.states = states;


// ========================================
// default
// ========================================
module.exports.default = {
	tasks: [
		'server',
		'watch'
	]
};


// ========================================
// build
// ========================================
module.exports.build = {
	tasks: [
		'clean',
		'bower',
		'copy',
		'jade',
		'sass',
		'js',
		'imagemin'
	]
};


// ========================================
// browserSync
// ========================================
module.exports.browserSync = {
	proxy: "template_website.localhost"
	// proxy: "template_html.localhost"
	// server: {
	// 	baseDir: dest
	// }
};


// ========================================
// browserSync
// ========================================
module.exports.convertEncoding = {
	to: 'utf8'
	// to: 'shift_jis'
};


// ========================================
// sass
// ========================================
module.exports.sass = {
	src: paths.srcDir + '**/*.scss',
	errorMessage: "Error: <%= err.message %>",
	options: {
		sourcemap: true,
		outputStyle: 'expanded',
		includePaths: [paths.srcDir + 'assets/scss']
	},
	// encodingFrom: 'UTF-8',
	// encodingTo: 'Shift_JIS'
};


// ========================================
// sourcemaps
// ========================================
module.exports.sourcemaps = {
	path: './',
	options: {
		// includeContent: false
		// sourceRoot: paths.destDir + 'assets/map/'
	}
};


// ========================================
// pleeease
// ========================================
module.exports.pleeease = {
	options: {
		browsers: ['last 4 version', 'Android 4'],
		// sourcemaps: true,
		mqpacker: false,
		minifier: false,
		import: false,

// sourcemaps: {
// 	map: {
// 		inline: false,
// 		sourcesContent: true
// 	}
// }

	}
};


// ========================================
// jade
// ========================================
module.exports.jade = {
	src: [
		paths.srcDir + '**/!(_)*.jade'
	],
	options: {
		pretty: true
	}
};


// ========================================
//  libs
// ========================================
module.exports.libs = {
	js: [
		'jquery/dist/jquery.min.js',
		'jquery.easing/js/jquery.easing.min.js',
		'underscore/underscore-min.js',
		'velocity/velocity.min.js',
		'imagesloaded/imagesloaded.pkgd.min.js',
		'gsap/src/minified/TweenMax.min.js',
		'gsap/src/minified/TimelineMax.min.js',
		'gsap/src/minified/plugins/ScrollToPlugin.min.js'
	],
	css: []
};

// ========================================
//  js
// ========================================
module.exports.js = {
	src: [
		paths.srcDir + '**/js/**/*.js',
		'!' + paths.srcDir + '**/js/lib/**/*.js',
	]
};

// ========================================
// imagemin
// ========================================
module.exports.imagemin = {
	src:      paths.srcDir + '**/*.+(jpg|jpeg|png|gif|svg)',
	options:  {
		optimizationLevel:  3,
		progressive:        true,
		use:                [$.pngquant({
													quality: '80-90',
													speed: 1
												})]
	}
};


// ========================================
// copy
// ========================================
module.exports.copy = {
	src: [
		paths.srcDir + '**/*.md',
		paths.srcDir + '**/*.txt',
		paths.srcDir + '**/*.htm',
		paths.srcDir + '**/*.html',
		paths.srcDir + '**/*.php',
		paths.srcDir + '**/*.inc',
		// paths.srcDir + '**/*.scss',
		paths.srcDir + '**/*.css',
		paths.srcDir + '**/*.tpl',
		paths.srcDir + '**/*.xml',
		paths.srcDir + '**/*.json',
		paths.srcDir + '**/*.ico',
		paths.srcDir + '**/*.swf',
		paths.srcDir + '**/*.pdf',
		paths.srcDir + '**/*.mp3',
		paths.srcDir + '**/*.mp4',
		paths.srcDir + '**/*.ogv',
		paths.srcDir + '**/*.webm',
		paths.srcDir + '**/*.zip',
		paths.srcDir + '**/*.otf',
		paths.srcDir + '**/*.eot',
		paths.srcDir + '**/*.woff',
		paths.srcDir + '**/*.woff2',
		paths.srcDir + '**/*.ttf',
		paths.srcDir + '.htaccess'
	]
};


// ========================================
// sprite
// ========================================
module.exports.sprite = {
	src: paths.srcDir + 'assets/img/sprite/*.*',
	destImg: paths.srcDir + 'assets/img/',
	destScss: paths.srcDir + 'assets/scss/',
	options: {
		imgName : 'sprite.png',
		cssName: '_sprite.scss',
		cssFormat: 'scss',
    padding: 10
	}
};
