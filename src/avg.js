let sum = require('./sum');

/**
 * Returns the average of the numbers in the input array.
 *
 * Use your own sum function, required above. Assume that
 * the input array is non-empty.
 *
 * @param {number[]} array - A non-empty array of numbers
 * @returns {number} The average
 */
function avg(array) {
  let arraySum = sum(array);
  let avg = arraySum/array.length;


  //if avg is a long decimal, returns avg rounded to 2 places
  if(avg % 1 != 0) {
    return parseFloat(avg.toFixed(2), 10);
  }

  //otherwise, returns whole number
  return avg;
}

if (require.main === module) {
  console.log('Running sanity checks for avg:');

  console.log(avg([30, 10, 20]) === 20);
  console.log(avg([-10, 10]) === 0);
  console.log(avg([5, 5, 5]) === 5);
  console.log(avg([0, 1, 2, 3, 4, 5, 6]) === 3);
  console.log(avg([24.3, 61.9, 3.175]) === 29.79);
  console.log(avg([3.5, 6.4, 9]) === 6.3)
}

module.exports = avg;
