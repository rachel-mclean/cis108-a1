/**
 * Return the largest number in the given array. You can
 * assume the input array is not empty.
 *
 * @param {number[]} array - A non-empty array of numbers
 * @returns {number} The largest number
 */
function max(array) {
  let max = array[0];

  for(let num of array){
    if(num >= max){
      max = num
    }
  }

  return max;
}

if (require.main === module) {
  console.log('Running sanity checks for max:');

  console.log(max([3, 2, 1]) === 3);
  console.log(max([1, 2, 3]) === 3);
  console.log(max([-1, -2, -3]) === -1);
  console.log(max([3]) === 3);
  console.log(max([1, 3, 2]) === 3);
}

module.exports = max;
