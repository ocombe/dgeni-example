var gulp = require('gulp');

gulp.task('dgeni', function() {
  try {
    return require('./docs/dgeni.conf').generate();
  } catch(x) {
    console.log(x.stack);
    throw x;
  }
});

gulp.task('default', ['dgeni']);