const postcssImport = require('postcss-import');
const cssnext = require('postcss-cssnext');
const paths = require('./paths');


module.exports = {
  resolve: {
    extensions: ['', '.js', '.json'],
    alias: {
      src: paths.srcDir // this allows import 'src/...' without knowing the relative path
    }
  },
  preLoaders: [
    {
      test: /\.js$/,
      include: paths.srcDir,
      loader: 'eslint'
    }
  ],
  loaders: [
    {
      test: /\.json$/,
      loader: 'json'
    },
    {
      test: /\.(eot|otf|ttf|woff|woff2)(\?.*)?$/,
      loader: 'file',
      query: {
        name: 'fonts/[name].[hash:8].[ext]'
      }
    },
    {
      test: /\.(jpg|jpeg|png|gif|svg|ico|webp)(\?.*)?$/,
      loader: 'file',
      query: {
        name: 'media/[name].[hash:8].[ext]'
      }
    },
    {
      test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: 'media/[name].[hash:8].[ext]'
      }
    }
  ],
  postcss(wp) {
    return [
      postcssImport({
        addDependencyTo: wp
      }),
      cssnext({
        browsers: [
          '>1%',
          'last 2 versions',
          'Firefox ESR',
          'not ie < 9'
        ]
      })
    ];
  },
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
