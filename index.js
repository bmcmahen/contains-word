
/**
 * Determine if a word exists within a string,
 * and if it does, return the start and end indexes
 * of that word within the string.
 * @param  {String} string 
 * @param  {String} substring   
 * @param  {i} i 
 * @return {false || object} 
 */

module.exports = function(string, substring, i){
  var index = string.toLowerCase().indexOf(substring.toLowerCase(), i);
  if (index == -1) return false;
  return { from: index, to: index + substring.length };
};