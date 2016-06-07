module.exports = {
  devtool: 'source-map',
  entry: {
    'on-hash-change': './lib/vanilla/on-hash-change/index.js',
    'on-click-prevent-default': './lib/vanilla/on-click-prevent-default/index.js',
    'on-click-prevent-default-change-hash': './lib/vanilla/on-click-prevent-default-change-hash/index.js',
    'on-click-prevent-default-change-location': './lib/vanilla/on-click-prevent-default-change-location/index.js'
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
