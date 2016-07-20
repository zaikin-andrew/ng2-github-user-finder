var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', function() {
  gulp.src('dist')
    .pipe(webserver({
      host: '127.0.0.1',
      port: 3030,
      fallback: 'index.html'
    }));
});
