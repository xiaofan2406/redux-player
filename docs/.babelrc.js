let plugins = [
  'babel-plugin-transform-class-properties',
  ['babel-plugin-transform-object-rest-spread', { useBuiltIns: true }],
  ['babel-plugin-transform-react-jsx', { useBuiltIns: true }],
  'babel-plugin-transform-export-extensions'
];

if (process.env.NODE_ENV === 'development') {
  plugins = [
    ...plugins,
    'react-hot-loader/babel',
    'babel-plugin-transform-react-jsx-source',
    'babel-plugin-transform-react-jsx-self'
  ];
}

module.exports = {
  presets: [
    [
      'babel-preset-env',
      {
        targets: {
          browsers: [
            'Chrome >= 60',
            'Safari >= 10.1',
            'iOS >= 10.3',
            'Firefox >= 54',
            'Edge >= 15'
          ]
        },
        modules: false
      }
    ],
    'babel-preset-react'
  ],
  plugins: [...plugins, 'babel-plugin-syntax-dynamic-import']
};
