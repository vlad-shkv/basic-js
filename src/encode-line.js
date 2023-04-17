const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let strArr = str.split('');

  for (let i = 0; i < strArr.length; i++) {
    let current = 1;

    function plus(val) {
      if (val[i] === val[i + current]) {
        val[i + current] = '';
        current += 1;
        plus(val);
      } else if (val[i] !== '' && current > 1) {
        res += current + val[i];
      } else {
        res += val[i];
      }
    }

    plus(strArr);
  }

  return res;
}

module.exports = {
  encodeLine
};
