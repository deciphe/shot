import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const root = new URL('../', import.meta.url);
const file = new URL('shot.user.js', root);
const source = readFileSync(file, 'utf8');
execFileSync(process.execPath, ['--check', fileURLToPath(file)]);
const header = source.match(/^\/\/ ==UserScript==[\s\S]*?\/\/ ==\/UserScript==/)[0];
assert.equal(readFileSync(new URL('shot.meta.js', root), 'utf8'), header + '\n', 'Run npm run sync-meta');
for (const [key, value] of Object.entries({name:'GP. Shot for Vest', namespace:'https://github.com/deciphe/shot', updateURL:'https://raw.githubusercontent.com/deciphe/shot/main/shot.meta.js', downloadURL:'https://raw.githubusercontent.com/deciphe/shot/main/shot.user.js', match:'https://next.vestmarkets.com/*'})) {
  assert.equal(header.match(new RegExp('^// @'+key+'\\s+(.+)$','m'))?.[1], value, key);
}
assert.match(header, /^\/\/ @version\s+\d+\.\d+\.\d+$/m);
assert.ok(source.includes("GM_getValue('shot.v1', {}"));
assert.ok(!source.includes("GM_getValue('pulse'"));
console.log('Syntax, metadata, update URLs, and fresh storage checks passed.');
