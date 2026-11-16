import { readFileSync, writeFileSync } from 'node:fs';
const root = new URL('../', import.meta.url);
const source = readFileSync(new URL('shot.user.js', root), 'utf8');
const header = source.match(/^\/\/ ==UserScript==[\s\S]*?\/\/ ==\/UserScript==/);
if (!header) throw new Error('Missing userscript header');
writeFileSync(new URL('shot.meta.js', root), header[0] + '\n');
console.log('Updated shot.meta.js');
