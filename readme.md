# get-shell-rc
[![npm version](https://img.shields.io/npm/v/get-shell-rc.svg)](https://www.npmjs.com/package/get-shell-rc)
[![Build Status](https://travis-ci.org/dawsonbotsford/get-shell-rc.svg?branch=master)](https://travis-ci.org/dawsonbotsford/get-shell-rc)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Get the rc file path for any Linux/Unix Shell

## Install

```
npm install --save get-shell-rc
```

## Usage

```js
const getShellRc = require('get-shell-rc');

// when using bash
getShellRc();
//=> '/users/yourUsername/.bashrc'

// when using zsh
getShellRc();
//=> '/users/yourUsername/.zshrc'
```

## API

### getShellRc()

Returns a `string` with the absolute file path to your respective shell's `rc` file.

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)
