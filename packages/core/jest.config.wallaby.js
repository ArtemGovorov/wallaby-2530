const fs = require('fs');
const config = require('./jest.config');

module.exports = {
  ...config,
  watchPathIgnorePatterns: [
    ...fs.readdirSync('./').filter((path) => path !== 'src'),
    'src/actions',
    'src/styles',
    'src/tests',
    'src/plugins',
    'src/components',
  ],
};
