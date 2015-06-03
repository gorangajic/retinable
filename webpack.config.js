var webpack = require('webpack');

var plugins = [];

if (process.env.NODE_ENV == "proudction") {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  );
}

module.exports = {

  output: {
    library: 'retinable',
    libraryTarget: 'umd'
  },

  plugins: plugins

};