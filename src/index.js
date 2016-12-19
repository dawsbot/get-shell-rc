'use strict';
import path from 'path';

module.exports = function (replaceMe) {
  const shell = process.env.SHELL;
  const split = shell.split('/');
  const fileName = `.${split[split.length - 1]}rc`;
  return path.join(process.env.HOME, fileName);
};
