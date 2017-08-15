var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: ['babel-polyfill', './js/index.js'],
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      }
    ]
  },
  output: {
    path: __dirname + '/public',
    filename: 'index.min.js'
  },
}