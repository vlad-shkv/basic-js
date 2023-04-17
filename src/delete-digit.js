const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let finArray = [];
  let splitN = String(n).split('');
  for (let step of splitN) {
    let splitN2 = String(n).split('');
    splitN2[splitN2.indexOf(step)] = '';
    finArray.push(Number(splitN2.reduce((acc, number) => acc + number, 0)));
  }
  return Math.max(...finArray);
}

module.exports = {
  deleteDigit
};
