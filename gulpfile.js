import gulp from 'gulp';
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin';
import imageminOptipng from 'imagemin-optipng';

export function defaultTask(cb) {
  gulp.src('src/assets/images/**/*')
    .pipe(imagemin([
      imageminOptipng()
      // mozjpeg({quality: 75, progressive: true}),
      // optipng({optimizationLevel: 9}),
      // svgo({
      //   plugins: [
      //     {
      //       name: 'removeViewBox',
      //       active: true
      //     },
      //     {
      //       name: 'cleanupIDs',
      //       active: false
      //     }
      //   ]
      // })
    ]))
    .pipe(gulp.dest('www/assets/images'))
    .on('end', cb);

  // cb();
}

// exports.default = defaultTask
