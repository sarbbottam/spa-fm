module.exports = {
  devtool: 'source-map',
  entry: {
    'hash-change': './lib/vanilla/hash-change/index.js',
    'data-ref': './lib/vanilla/data-ref/index.js'
  },
  output: {
    libraryTarget: 'umd',
    library: '[name]',
    path: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?presets[]=es2015'
      }
    ]
  }
};
