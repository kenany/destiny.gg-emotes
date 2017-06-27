var test = require('tape');

var emotes = require('../');

test('exports an array', function(t) {
  t.plan(1);
  t.ok(Array.isArray(emotes));
});
