/**
 * Given a number, return its smallest prime factor. If a
 * number is prime, return that number itself.
 *
 * @example
 * smallestPrimeFactor(2); // => 2
 * smallestPrimeFactor(4); // => 2
 * smallestPrimeFactor(21); // => 3
 * smallestPrimeFactor(91); // => 7
 *
 * @param {number} num - A number
 * @returns {number} The smallest prime factor of num
 */


//this seems really inefficient but I can't figure out how to do it differently
function smallestPrimeFactor(num) {

  primeFactors = [];

  let factors = findFactors(num);

  // finds factors of each factor in the list
  // adds these factors to collective list of factors
  for(let num of factors) {
    let elementFactors = findFactors(num);
    if(elementFactors.length === 1){
      primeFactors = primeFactors.concat(elementFactors);
    }
  }

  // finds minimum factor of collective list
  let min = primeFactors[0];
  for(let num of primeFactors) {
    if(num < min) {
      min = num;
    }
  }

  return min;
}


//finds all factors
function findFactors(num) {

  let factors = [];

  for(let i = 2; i<=num; i++){
    if(num%i === 0){
      factors.push(i);
    }
  }

  return factors;
}


if (require.main === module) {
  console.log('Running sanity checks for smallestPrimeFactor:');

  console.log(smallestPrimeFactor(20) === 2);
  console.log(smallestPrimeFactor(35) === 5);
  console.log(smallestPrimeFactor(25) === 5);
  console.log(smallestPrimeFactor(2) === 2);
  console.log(smallestPrimeFactor(100) === 2);
  console.log(smallestPrimeFactor(9) === 3);

}

module.exports = smallestPrimeFactor;
