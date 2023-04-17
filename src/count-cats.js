const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(args) {
  let res = 0;
  for (let step of args) {
    for (let i of step) {
      if (i === '^^') {
        res += 1;
      }
    }
  }
  return res;
}

module.exports = {
  countCats
};
