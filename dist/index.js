'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (replaceMe) {
  var shell = process.env.SHELL;
  var split = shell.split('/');
  var fileName = '.' + split[split.length - 1] + 'rc';
  return _path2.default.join(process.env.HOME, fileName);
};