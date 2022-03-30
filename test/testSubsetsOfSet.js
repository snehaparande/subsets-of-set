const testLib = require('./assert.js');
const lib = require('../src/subsetsOfSet.js');
const assert = testLib.assertNestedArray;
const subsetsOfSet = lib.subsetsOfSet;

const testSubsetsOfSet = function (set, expectedSet, message) {
  const actualSet = subsetsOfSet(set);
  assert(expectedSet, actualSet, message);
};

const subsetsOfSetTests = function () {
  testSubsetsOfSet([], [[]], 'An empty set');
  testSubsetsOfSet([1], [[], [1]], 'A set with one element');
  testSubsetsOfSet([1, 2], [[], [1], [2], [1, 2]], 'A set with two element');
};

subsetsOfSetTests();