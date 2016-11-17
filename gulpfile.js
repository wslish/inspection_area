var gulp = require('gulp');
var bump = require('gulp-bump');

gulp.task('major', function(){
  gulp.src('./package.json')
  .pipe(bump({type:'major', indent: 4 }))
  .pipe(gulp.dest('./'));
});

gulp.task('minor', function(){
  gulp.src('./package.json')
  .pipe(bump({type:'minor', indent: 4 }))
  .pipe(gulp.dest('./'));
});

gulp.task('patch', function(){
  gulp.src('./package.json')
  .pipe(bump({type:'patch', indent: 4 }))
  .pipe(gulp.dest('./'));
});

gulp.task('prerelease', function(){
  gulp.src('./prerelease.json')
  .pipe(bump({type:'major', indent: 4 }))
  .pipe(gulp.dest('./'));
});

gulp.task('help', function(){
  console.log('gulp major|minor|patch|prerelease')
})

gulp.task('default', ['patch'],function(){
  console.log('ok')
})
