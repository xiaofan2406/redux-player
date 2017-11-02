const path = require('path');
const ifconfig = require('os').networkInterfaces();

function getLocalIp() {
  const detail = Object.keys(ifconfig)
    .filter(ifaceName => ifaceName.indexOf('lo') === -1)
    .map(
      ifaceName =>
        ifconfig[ifaceName].filter(
          protocol => protocol.family === 'IPv4' && protocol.internal === false
        )[0]
    )[0];

  return detail && detail.address;
}

const appRoot = path.join(__dirname, '..');
const appSrc = path.join(appRoot, 'src');
const appDist = path.join(appRoot, 'dist');

const devServerPort = process.env.PORT || 8080;
const testProdPort = process.env.PORT || 9000;

module.exports = {
  devServerPort,
  devServerIp: process.env.HOST || getLocalIp(),
  testProdPort,
  paths: {
    appRoot,
    appSrc,
    appDist
  }
};
