import { mkdirSync, writeFileSync } from 'node:fs';

// Honest count: a headless agent has no browser, so no tabs.
const entry = '0';
if (!/^\d{1,5}$/.test(entry)) throw new Error('entry fails the gate');

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', entry, 'utf8');
