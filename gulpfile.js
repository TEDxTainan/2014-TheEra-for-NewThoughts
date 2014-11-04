var gulp = require('gulp');
var csso = require('gulp-csso');
var minifyHTML = require('gulp-minify-html');
var sass = require('gulp-ruby-sass');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var optipng = require('imagemin-optipng');

gulp.task('default', function () {
    return gulp.src('app/assets/img/background.png')
        .pipe(optipng({ optimizationLevel: 3 })())
        .pipe(gulp.dest('dist/images'));
});

//gulp.task('default', ['html', 'css', 'js'], function () {
//});

gulp.task('html', function() {
  var opts = {comments:true,spare:true};
  gulp.src('app/*.html')
  .pipe(minifyHTML(opts))
  .pipe(gulp.dest('dist/html'))
});

gulp.task('css', function() {
  return gulp.src('app/assets/css/*.css')
    .pipe(csso())
    .pipe(gulp.dest('dist/css'));
 });

 gulp.task('js', function() {
     gulp.src('app/assets/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
 });

gulp.task('scss', function () {
    return gulp.src('app/assets/scss/new.thoughts.scss')
        .pipe(sass({sourcemap: true, sourcemapPath: '../scss'}))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('dist/css'));
});

gulp.task('images', function () {
    return gulp.src('app/assets/img/*')
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
