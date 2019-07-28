const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  plugins: [
    new CompressionPlugin({
      compressionOptions: {
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      }
    })
  ],
  devServer: {
    index: 'index.html',
    compress: true,
    open: true,
    historyApiFallback: true,
    hot: true
  }
}
