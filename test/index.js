var emotes = require('../');
var test = require('tape');
var isArray = require('lodash.isarray');

test('exports an array', function(t) {
  t.plan(1);
  t.ok(isArray(emotes));
});
