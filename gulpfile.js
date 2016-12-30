const jshint = require('gulp-jshint');
const gulp   = require('gulp');
const sass = require('gulp-sass');

gulp.task('lint', function() {
  return gulp.src('./javascript/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('sass', function () {
 return gulp.src('./sass/**/*.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./css'));
});
 
gulp.task('sass-watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});