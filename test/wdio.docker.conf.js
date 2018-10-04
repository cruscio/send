// eslint-disable-next-line node/no-extraneous-require
const ip = require('ip');
const common = require('./wdio.common.conf');

/*/

Config for running selenium in a new docker container against localhost

/*/

exports.config = Object.assign({}, common.config, {
  baseUrl: `http://${ip.address()}:8000`,
  maxInstances: 1,
  services: ['docker', require('./testServer')],
  dockerOptions: {
    image: 'b4handjr/selenium-firefox',
    healthCheck: 'http://localhost:4444',
    options: {
      p: ['4444:4444'],
      shmSize: '2g'
    }
  }
});
