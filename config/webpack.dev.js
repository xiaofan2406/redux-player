const webpack = require('webpack');
const paths = require('./paths');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getLocalIP = require('./ip');


module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    `${paths.srcDir}/index.dev.js`
  ],
  resolve: {
    extensions: common.resolve.extensions,
    alias: common.resolve.alias
  },
  output: {
    // For dev, `path` and `filename` are not important because of using webpack-dev-server
    path: paths.buildDir,
    filename: 'bundle.js',
    // In development, we always serve from the root. This makes config easier.
    publicPath: '/',
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true
  },
  module: {
    preLoaders: [...common.preLoaders],
    loaders: [{
      test: /\.js$/,
      include: paths.srcDir,
      loader: 'babel',
      query: {
        cacheDirectory: true
      }
    }, {
      test: /\.css$/,
      loader: 'style!css?-autoprefixer&importLoaders=1!postcss'
    },
      ...common.loaders
    ]
  },
  postcss: common.postcss,
  node: common.node,
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: `${paths.srcDir}/index.html`,
      favicon: `${paths.srcDir}/favicon.ico`
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: paths.buildDir,
    historyApiFallback: true,
    hot: true,
    inline: true,
    // It is important to tell WebpackDevServer to use the same "root" path
    // as we specified in the config. In development, we always serve from /.
    publicPath: '/',
    stats: 'errors-only',
    watchOptions: {
      ignored: /node_modules/
    },
    host: process.env.HOST || getLocalIP(),
    port: process.env.PORT || 8080
  }
};
