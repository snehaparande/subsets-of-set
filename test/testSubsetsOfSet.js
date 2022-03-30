const testLib = require('./assert.js');
const lib = require('../src/subsetsOfSet.js');
const assert = testLib.assertNestedArray;
const subsetsOfSet = lib.subsetsOfSet;

const testSubsetsOfSet = function (set, expectedSet, message) {
  const actualSet = subsetsOfSet(set);
  assert(expectedSet, actualSet, message);
};

const subsetsOfSetTests = function () {
  testSubsetsOfSet([], [[]], 'An empty array');
};

subsetsOfSetTests();