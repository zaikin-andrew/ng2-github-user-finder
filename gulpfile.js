var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', function() {
  gulp.src('dist')
    .pipe(webserver({
      port: 3030,
      fallback: 'index.html'
    }));
});
