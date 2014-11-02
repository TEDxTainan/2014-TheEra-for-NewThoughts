var gulp = require('gulp');
var csso = require('gulp-csso');
var minifyHTML = require('gulp-minify-html');
var sass = require('gulp-ruby-sass');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var browserSync = require('browser-sync');

gulp.task('default', ['html', 'css', 'js'], function () {
});

gulp.task('html', function() {
  var opts = {comments:true,spare:true};
  gulp.src('*.html')
  .pipe(minifyHTML(opts))
  .pipe(gulp.dest('dist/html'))
});

gulp.task('css', function() {
  return gulp.src('assets/stylesheets/*.css')
    .pipe(csso())
    .pipe(gulp.dest('dist/css'));
 });

 gulp.task('js', function() {
     gulp.src('assets/javascripts/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
 });

 gulp.task('scss', function () {
  return gulp.src('assets/scss/*.scss')
    .pipe(sass({sourcemap: true, sourcemapPath: '../scss'}))
    .on('error', function (err) { console.log(err.message); })
    .pipe(gulp.dest('dist/css/'));
 });

gulp.task('images', function () {
    return gulp.src('assets/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});
