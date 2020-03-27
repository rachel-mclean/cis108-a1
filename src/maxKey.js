/**
 * Given an object whose entries have numbers as values,
 * return the key with the largest value.
 *
 * @example
 * maxKey({a: 10, b: -4, c: 20}); // => 'c'
 *
 * @param {object} array - A non-empty array of numbers
 * @returns {number} The key with the largest value
 */
function maxKey(obj) {
  let max = Number.MIN_SAFE_INTEGER;
  let max_key;
  Object.keys(obj).forEach(function(key) {
    if (obj[key] > max) {
      max = obj[key];
      max_key = key;
    }
  });
  return max_key;
}

if (require.main === module) {
  console.log('Running sanity checks for maxKey:');

  console.log(maxKey({a: 10, b: -4, c: 20}) === 'c');
  console.log(maxKey({a: 0, b: -4, c: -10}) === 'a');
  console.log(maxKey({a: -10, b: 5, c: 0}) === 'b');

}

module.exports = maxKey;
