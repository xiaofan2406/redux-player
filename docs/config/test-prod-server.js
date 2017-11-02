const server = require('serve');
const configs = require('./configs');

server(configs.paths.appDist, {
  port: configs.testProdPort,
  single: true
});

console.log('Production server listening...');
console.log(`http://localhost:${configs.testProdPort}`);
console.log(`http://${configs.devServerIp}:${configs.testProdPort}`);
