import test from 'ava';
import getShellRc from './dist';
import path from 'path';

test('bash', t => {
  process.env.SHELL = '/bin/bash';
  t.is(getShellRc(), path.join(process.env.HOME, '.bashrc'));
});

test('zsh', t => {
  process.env.SHELL = '/bin/zsh';
  t.is(getShellRc(), path.join(process.env.HOME, '.zshrc'));
});
