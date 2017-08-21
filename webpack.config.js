const path = require('path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: ['babel-polyfill', './js/index.js'],
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            "react", 
            "stage-2",
            ["env", {
              "targets": {
                "browsers": ["last 2 versions"]
              },
              "debug": true
            }]
          ]
        }
      },
    ]
  },
  output: {
    path: __dirname + '/public',
    filename: 'index.min.js'
  },
  //plugins: [new UglifyJSPlugin()]
};
