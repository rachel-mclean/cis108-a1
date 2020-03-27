/**
 * Returns the sum of the numbers in the input array. If
 * the array is empty the function returns 0.
 *
 * @param {number[]} array - An array of numbers
 * @returns {number} The sum
 */

function sum(array) {
  let sum = 0;

  for(let num of array){
    sum += num;
  }

  return sum;
}


if (require.main === module) {
  console.log('Running sanity checks for sum:');

  console.log(sum([1, 2, 3]) === 6);
  console.log(sum([-10, 10]) === 0);
  console.log(sum([-1, 0, -1]) === -2);
  console.log(sum([0, 0, 0]) === 0);
}

module.exports = sum;
