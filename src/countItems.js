/**
 * Given an array of strings, returns an object whose keys
 * are the individual strings in the input array and the
 * values are the number of times that string appears.
 *
 * @example
 * // returns { 'apple': 2, 'goat': 1, 'potato': 1 }
 * countItems(['apple', 'goat', 'apple', 'potato']);
 *
 * @param {string[]} array - An array of strings
 * @returns {object} An object containing the count of each
 *  string in the input array
 */
function countItems(array) {
  let counts = {};
  let numWords = array.length;
  for (let i = 0; i < numWords; i++) {
    if (counts[array[i]] === undefined) {
      counts[array[i]] = 1;
    } else {
      counts[array[i]] = counts[array[i]] + 1;
    }
  }

  return counts;
}

if (require.main === module) {
  console.log('Running sanity checks for countItems:');

  console.log(countItems(['apple', 'goat', 'apple', 'potato']), " is equal to",   { 'apple': 2, 'goat': 1, 'potato': 1 });
  console.log(countItems(['a', 'a', 'a', 'a']), " is equal to",   { 'a': 4 });
  console.log(countItems(['adjacent', 'is', 'cool']), " is equal to",   { 'adjacent': 1, 'is': 1, 'cool': 1});
  console.log(countItems([]), " is equal to",   {});
}

module.exports = countItems;
