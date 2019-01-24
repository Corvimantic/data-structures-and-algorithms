/* Returns an array of ints of the specified length.
 * Optional: use min (inclusive) and max (exclusive) to specify a range for the generated ints.
 * Defaults are 0 (min) and 50 (max). */
const generateRandomArray = function(length, min, max) {
  if (typeof min !== 'number') {
    min = 0;
  }
  if (typeof max !== 'number') {
    max = 50; 
  }
  
  const result = [];
  for (var i = 0; i < length; i++) {
    result.push(generateRandomInt(min, max));
  }
  
  return result;
};

// Returns a random int between min (inclusive) and max (exclusive)
const generateRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

/* Creates an array of specified length, containing objects of form {value: (int), order: (int)}
 ** value is a random int between 0 and Math.floor(length/2). 
 ** order describes the order in which objects with the same value were generated.
 * This function guarantees objects with duplicate values.
 * Example: [{value: 1, order: 1}, {value: 1, order: 2}, {value: 0, order: 1}, {value: 1, order: 3}, {value: 0, order: 2}] */
const generateRandomObjectArray = function(length) {
  const result = [];
  const counter = {};
  const maxRandom = Math.floor(length / 2);

  for (var i = 0; i < length; i++) {
    const value = generateRandomInt(0, maxRandom);
    incrementCounter(counter, value);

    result.push({value: value, order: counter[value]});
  }

  return result;
}

// This is a helper for the above function and is not exported on its own.
const incrementCounter = function(counter, value) {
  if (!counter[value]) {
    counter[value] = 1;
  } else {
    counter[value]++;
  }
}

/* Exports */

module.exports = {
  generateRandomArray: generateRandomArray,
  generateRandomInt: generateRandomInt,
  generateRandomObjectArray: generateRandomObjectArray,
};