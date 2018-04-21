var gulp      = require('gulp'),
    index     = require('./gulp/index'),
    config    = require('./gulp/config'),
    $         = require('./gulp/tasks/plugins');


// ビルド
gulp.task('build', () => {
	$.runSequence(config.build.tasks);
});

// デフォルト
gulp.task('default', () => {
	$.runSequence(config.default.tasks);
});

















