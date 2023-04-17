const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let res = n;
  while (res >= 10) {
    let digits = res.toString().split('');
    res = digits.reduce((sum, number) => sum + (+number), 0);
  }
  return res;
}

module.exports = {
  getSumOfDigits
};
