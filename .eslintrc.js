module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  settings: {
    'import/ignore': [
      'node_modules',
      '\\.(json|css|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$',
    ],
    'import/extensions': ['.js'],
    'import/resolver': {
      webpack: {
        config: './config/webpack.dev.js'
      }
    }
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: ["react"],
  extends: ["airbnb"],
  rules: { // additional rules to work with eslint-config-airbnb
    "comma-dangle": [2, "never"], // yuk, disallow comma after the last propery of an object
    "new-cap": 0, // disable for HigherOrderComponent wrapping
    "no-console": 0, // still good for debuging
    "no-underscore-dangle": ["error", { "allowAfterThis": true, "allowAfterSuper": true }], // class helper methods
    "no-param-reassign": 0, // e.target.value = ''; happens all the time
    "no-plusplus": 0, // i++ is allowed
    "arrow-parens": [2, "as-needed", { "requireForBlockBody": true }], // better looking arrow-funcs
    "jsx-a11y/no-static-element-interactions": 0, // div onClick should be allowed
    "import/no-extraneous-dependencies": 0, // not necessary at all
    "react/jsx-filename-extension": 0, // enfore all .js extension
    "react/no-unused-prop-types": [2, { skipShapeProps: true }], // skip shape
    "react/forbid-prop-types": 0 // PropTypes.object is allowed
  }
};
