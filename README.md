# React Starter Kit
[![Build Status](https://travis-ci.org/xiaofan2406/react-starter-kit.svg?branch=redux)](https://travis-ci.org/xiaofan2406/react-starter-kit) [![dependencies Status](https://david-dm.org/xiaofan2406/react-starter-kit/status.svg)](https://david-dm.org/xiaofan2406/react-starter-kit) [![devDependencies Status](https://david-dm.org/xiaofan2406/react-starter-kit/dev-status.svg)](https://david-dm.org/xiaofan2406/react-starter-kit?type=dev)


### Get Started
- Install dependencies
```
npm i
```

- Run dev server
```
npm run dev
```

- Build for production (build only, no server setup)
```
npm run build
```


### Details
- ##### Redux
  - domain sperated folder structure
  - top level selector to retrieve state

- ##### CSS
using [`ExtractTextPlugin`](https://github.com/webpack/extract-text-webpack-plugin) to combine all css files into one

- ##### CSS Modules
NOT enabled

- ##### PostCSS
using [`cssnext`](http://cssnext.io/) and [`postcss-import`](https://github.com/postcss/postcss-import)

- ##### Hot Module Replacement
using [`react-hot-loader`](https://github.com/gaearon/react-hot-loader/tree/next)

- ##### Test production build
  ```
  npm i -g pushstate-server
  pushstate-server ./build 9000
  ```


### Branches
- [redux](https://github.com/xiaofan2406/react-starter-kit/tree/redux)
- [mobx](https://github.com/xiaofan2406/react-starter-kit/tree/mobx)
- [electron](https://github.com/xiaofan2406/react-starter-kit/tree/electron)


### Folders
- `config`: webpack configuration files
- `src`: source files directory, processed by webpack
