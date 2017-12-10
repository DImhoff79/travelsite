
var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefix = require('autoprefixer');
var cssvars = require('postcss-simple-vars');

gulp.task('default', function () {
    console.log('Gulp is running now....');
});

gulp.task('styles', function () {
    return gulp
        .src('./app/assets/styles/styles.css')
        .pipe(postcss([autoprefix, cssvars]))
        .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function () {
    watch('./app/index.html', function () {
        gulp.start('default');
    });

    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('styles');
    });
});