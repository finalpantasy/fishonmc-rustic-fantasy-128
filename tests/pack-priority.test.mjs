import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

test('only this fish pack opts into server-pack overlay priority', () => {
  const metadata = JSON.parse(fs.readFileSync(path.join(repoRoot, 'pack.mcmeta'), 'utf8'));

  assert.match(metadata.pack.description, /^§kSPO§r/);
});

test('installation guide prevents the global-priority HUD regression', () => {
  const readme = fs.readFileSync(path.join(repoRoot, 'README.md'), 'utf8');

  assert.match(readme, /ServerPackOverlay/);
  assert.match(readme, /hearts, armor, and hunger/i);
  assert.doesNotMatch(readme, /install \[Serverpack Priority\]/i);
});
