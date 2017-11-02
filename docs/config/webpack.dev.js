const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const { devServerPort, devServerIp, paths } = require('./configs');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    require.resolve('./polyfills'),
    'react-hot-loader/patch',
    `${paths.appSrc}/index.js`
  ],
  resolve: common.resolve,
  output: {
    // For dev, `path` and `filename` are not important because of using webpack-dev-server
    path: paths.appDist,
    filename: 'bundle.js',
    chunkFilename: 'js/[name].chunk.js',
    // Necessary for HMR to know where to load the hot update chunks
    publicPath: '/',
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true,
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
  },
  module: {
    strictExportPresence: true,
    rules: [
      ...common.rules,
      {
        test: /\.js$/,
        include: paths.appSrc,
        loader: 'babel-loader',
        options: { cacheDirectory: true }
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  node: common.node,
  performance: { hints: false },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: `${paths.appSrc}/assets/index.html`,
      favicon: `${paths.appSrc}/assets/favicon.ico`
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    compress: true,
    historyApiFallback: { disableDotRule: true },
    hot: true,
    publicPath: '/',
    stats: 'errors-only',
    watchOptions: { ignored: /node_modules/ },
    https: process.env.HTTPS === 'true',
    host: devServerIp,
    port: devServerPort
  }
};
