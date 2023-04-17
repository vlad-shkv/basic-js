const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(string1, string2) {
  let res = 0;
  let spl1 = string1.split('');
  let spl2 = string2.split('');

  spl1.forEach(x => {
    if(spl2.includes(x)) {
      res += 1;
      spl2[spl2.indexOf(x)] = '';
    }
  })

  return res;
}

module.exports = {
  getCommonCharacterCount
};
