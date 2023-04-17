const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  function transform(string, repeat, separator) {
    let strArr = [];
    for (let i = 0; i < repeat; i++) {
      strArr.push(string);
    }
    return strArr.join(separator);
  }

  let res = str.toString();
  if (Object.keys(options).includes('addition')) {
    res += transform(options.addition.toString(), options.additionRepeatTimes, options.additionSeparator);
  }

  return transform(res, options.repeatTimes, options.separator);
}

module.exports = {
  repeater
};
