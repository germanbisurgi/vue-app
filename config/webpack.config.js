const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, '..', 'dist'),
    assetModuleFilename: 'assets/[name][ext]'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ]
  },
  devServer: {
    open: true,
    hot: true
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.wasm', '.vue'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  }
}
