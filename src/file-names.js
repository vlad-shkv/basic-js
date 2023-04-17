const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let res = [];
  for (let step of names) {
    let num = 1;
    if (!res.includes(step)) {
      res.push(step);
    } else {
      while (res.includes(`${step}(${num})`)) {
        num += 1;
      };
      res.push(`${step}(${num})`);
    }
  }
  return res;
}

module.exports = {
  renameFiles
};
