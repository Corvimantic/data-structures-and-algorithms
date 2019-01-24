const insertionSort = require('../algorithms/insertionSort.js');
const helpers = require('./helpers.js');

describe('insertionSort', () => {
  test('should sort from min to max when called with no comparator', () => {
    const array = generateRandomArray(10);
    const sortedArray = insertionSort(array);

    expect(isSorted(sortedArray)).toBe(true);
    expect(sortedArray.length).toBe(10);
  });

  test('should sort using a comparator', () => {
    const comparator = function(a, b) { return a > b };
    const array = generateRandomArray(10);
    const sortedArray = insertionSort(array, comparator);

    expect(isSorted(sortedArray, comparator)).toBe(true);
    expect(sortedArray.length).toBe(10);
  });

  test('should mutate the input array', () => {
    const array = generateRandomArray(10);
    const sortedArray = insertionSort(array);

    expect(array).toBe(sortedArray);
  });

  //test('should be a stable sort', () => {
  //});
});


/* Helpers */

const {
  generateRandomArray,
  generateRandomInt,
  generateRandomObjectArray,
  isSorted,
} = helpers;