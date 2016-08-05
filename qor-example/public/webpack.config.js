module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: './dist',
    filename: "bundle.js",
    publicPath: '../public'
  },
  devServer: {
    inline: true,
    contentBase: 'public',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
