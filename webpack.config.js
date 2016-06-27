var path = require("path");

module.exports = {
  entry: "./js/index.js",
  output: {
    path: path.join(__dirname, "build"),
    filename: 'index.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015']
        }
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  node: {
    fs: "empty"
  },

};
