/* ***
General helper functions for testing.
Helpers more specific to the data structure or algorithm are defined in their individual files.
*** */

const generateRandomArray = function(length) {
  const result = [];
  for (var i = 0; i < length; i++) {
    result.push(generateRandomInt(50));
  }
  return result;
};

const generateRandomInt = function(max) {
  return Math.floor(Math.random() * max);
};

/*
Creates an array of objects of form {value: (int), order: (int)}
* value is a random int.
* order describes the order in which objects with the same value were generated.
This function is set to guarantee objects with duplicate values.
Example: [{value: 1, order: 1}, {value: 1, order: 2}, {value: 0, order: 1}, {value: 1, order: 3}, {value: 0, order: 2}]
*/
const generateRandomObjectArray = function(length) {
  const result = [];
  const counter = {};
  const maxRandom = Math.floor(length / 2);

  for (var i = 0; i < length; i++) {
    const value = generateRandomInt(maxRandom);
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