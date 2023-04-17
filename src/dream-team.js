const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  };
  let res = [];
  for (let step of members) {
    if ((typeof step === 'string') && step.length > 0) {
      res.push(step.match(/\w[^0-9]{0}/));
    }
  };
  if (res.length > 0) {
    res = res.map(eleme => eleme[0].toUpperCase());
    res.sort();
    return res.join('');
  }
  return false;
}

module.exports = {
  createDreamTeam
};
