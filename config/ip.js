const ifconfig = require('os').networkInterfaces();

function getExternalIp() {
  const devices = Object.keys(ifconfig);

  for (const device of devices) {
    // ignore network loopback interface
    if (device.indexOf('lo') === -1) {
      const length = ifconfig[device].length;
      for (let i = 0; i < length; i++) {
        const protocol = ifconfig[device][i];

        // filter for external IPv4 addresses
        if (protocol.family === 'IPv4' && protocol.internal === false) {
          return protocol.address;
        }
      }
    }
  }
  return null;
}

module.exports = getExternalIp;
