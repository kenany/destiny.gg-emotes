const test = require('tape');

const emotes = require('../');

test('exports an array', (t) => {
  t.plan(1);
  t.ok(Array.isArray(emotes));
});
