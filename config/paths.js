const path = require('path');

const rootDir = path.join(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const appDir = path.join(rootDir, 'example');
const buildDir = path.join(rootDir, 'build');
const nodeModulesDir = path.join(rootDir, 'node_modules');


module.exports = {
  rootDir,
  srcDir,
  appDir,
  buildDir,
  nodeModulesDir
};
