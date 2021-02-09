const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const sassGlob = require('gulp-sass-glob');

const browserSync = require('browser-sync').create();

function sassTask() {
  return gulp.src("styles/**/*.scss")
    .pipe(sassGlob())
	  .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(gulp.dest('dist/css', { sourcemaps: '.' }));
	  // .pipe(browserSync.stream());
  }

  function jsTask(){
    return gulp.src('scripts/script.js', { sourcemaps: true })
      .pipe(terser())
      .pipe(gulp.dest('dist/scripts', { sourcemaps: '.' }));
  }


function browsersyncServe(cb){
	browserSync.init({
		server: {
			baseDir:'.'
		}
	});
	cb();
}

function browsersyncReload(cb){
  browserSync.reload();
  cb();
}

exports.default = gulp.series(
  sassTask,
  jsTask,
  browsersyncServe,
  watchTask
);

function watchTask(){
  gulp.watch('*.html', browsersyncReload);
  gulp.watch(['styles/**/*.scss', 'scripts/script.js'], gulp.series(sassTask, jsTask, browsersyncReload));
}



