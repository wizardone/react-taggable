let path = require('path');

module.exports = {
  entry: {
    main: './sample/sample.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'sample')
  },
  module: {
    rules: [
      {
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "sample"),
    publicPath: path.join(__dirname, "sample"),
    port: 9000,
    compress: true,
    hot: true,
    inline: true
  }
}

