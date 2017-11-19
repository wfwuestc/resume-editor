module.exports = {
  entry: "./app.js",
  output: {
    filename: 'dist/bundle.js'
  },
  module: {
    test: /\.js[x]?$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  }
}


