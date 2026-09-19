import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { generateCSS } from '../site/js/playground.js';

const index = readFileSync(new URL('../site/index.html', import.meta.url), 'utf8');
const about = readFileSync(new URL('../site/about/index.html', import.meta.url), 'utf8');
const flexbox = readFileSync(new URL('../site/issues/flexbox/index.html', import.meta.url), 'utf8');

test('renders the issue index without a subscribe link', () => {
  assert.match(index, /<h1 class="headline">Issues<\/h1>/);
  assert.match(index, /How to stop fighting your layout/);
  assert.doesNotMatch(index, /Subscribe/);
});

test('updates generated CSS in the article playground', () => {
  const css = generateCSS({
    direction: 'row',
    wrap: 'nowrap',
    justify: 'space-between',
    alignItems: 'stretch',
    alignContent: 'normal',
    gap: 0,
  });
  assert.match(css, /justify-content: space-between/);
  assert.match(flexbox, /data-value="space-between"/);
});

test('renders the supplied about copy', () => {
  assert.match(about, /<h1 class="headline">About Foxy CSS<\/h1>/);
  assert.match(about, /supervised, loosely, by two dogs/);
});
