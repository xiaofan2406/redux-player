const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const common = require('./webpack.common');
const { paths } = require('./configs');

module.exports = {
  bail: true,
  devtool: 'source-map',
  entry: {
    polyfill: require.resolve('./polyfills'),
    main: `${paths.appSrc}/index.js`,
    vendor: [
      'emotion',
      'prop-types',
      'react',
      'react-dom',
      'react-emotion',
      'react-redux',
      'react-router-dom',
      'redux'
    ]
  },
  resolve: common.resolve,
  output: {
    path: paths.appDist,
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
    publicPath: '/',
    // Point sourcemap entries to original disk location
    devtoolModuleFilenameTemplate: info =>
      path.relative(paths.appSrc, info.absoluteResourcePath).replace(/\\/g, '/')
  },
  module: {
    strictExportPresence: true,
    rules: [
      ...common.rules,
      {
        test: /\.js$/,
        include: paths.appSrc,
        loader: 'babel-loader',
        options: { compact: true }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { minimize: true, sourceMap: true }
            }
          ]
        })
      }
    ]
  },
  node: common.node,
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NamedChunksPlugin(
      chunk =>
        chunk.name ||
        chunk.mapModules(m => path.relative(m.context, m.request)).join('_')
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'runtime' }),
    new HtmlWebpackPlugin({
      inject: true,
      template: `${paths.appSrc}/assets/index.html`,
      favicon: `${paths.appSrc}/assets/favicon.ico`,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        ecma: 6,
        compress: { comparisons: false },
        output: { ascii_only: true, ecma: 6 },
        mangle: { safari10: true },
        sourceMap: true
      }
    }),
    new ExtractTextPlugin('css/[name].[contenthash:8].css'),
    new ManifestPlugin({ fileName: 'asset-manifest.json' }),
    new FileManagerPlugin({
      onEnd: {
        copy: [
          {
            // For surge.sh
            // https://surge.sh/help/adding-a-200-page-for-client-side-routing
            source: `${paths.appDist}/index.html`,
            destination: `${paths.appDist}/200.html`
          },
          {
            source: `${paths.appSrc}/assets/manifest.json`,
            destination: `${paths.appDist}/manifest.json`
          }
        ]
      }
    })
  ]
};
