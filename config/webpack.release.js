let webpack=require('webpack');
let config=require('./webpack.config');

function callback(err, stats) {
  if (err) {
    console.log(err);
  } else {
    console.log(stats.toString({
      colors: true,
      chunks: false,
      children: false,
    }));
  }
}
var compiler = webpack(config);
compiler.run(callback);