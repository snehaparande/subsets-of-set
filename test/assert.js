const assertNestedArray = function (exp, act, message) {
  let status = '✅';
  for (let index = 0; index < Math.max(exp.length, act.length); index++){
    const maxLenght = Math.max(exp[index].length, act[index].length);
    for (let innerIndex = 0; innerIndex < maxLenght; innerIndex++){
      if (act[index][innerIndex] !== exp[index][innerIndex]) {
        status = '❌';
      }
    }
  }
  console.log(status, message);
}

const assert = function (expectedOutput, actualOutput, message) {
  const testResult = actualOutput === expectedOutput;
  const status = testResult ? '✅' : '❌';
  console.log(status, message);
  return testResult;
};

exports.assert = assert;
exports.assertNestedArray = assertNestedArray;

