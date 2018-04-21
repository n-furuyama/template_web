const gulp = require('gulp');
const sass = require('gulp-sass');

const BASE_PATH = __dirname;
const PROJECT_DIR = ''; // srcの書き出し先がルートではないときに指定 例：xxxxx.com/test/ -> '/test'
const SRC_DIR = `${BASE_PATH}/src`;
const DIST_DIR = `${BASE_PATH}/dist`;


const SRC_PATH = {
  sass: `${SRC_DIR}/assets/scss/**/*.scss`,
};
const DIST_PATH = {
  sass: `${DIST_DIR}${PROJECT_DIR}/assets/css/`,
};


/**
 * sass
 */
gulp.task('sass', function () {
  return gulp.src( SRC_PATH.sass )
    .pipe( sass({outputStyle: 'compressed'}).on('error', sass.logError) )
    .pipe( gulp.dest( DIST_PATH.sass ) );
});



gulp.task('default', [ 'sass' ]);
