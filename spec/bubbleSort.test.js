const bubbleSort = require('../algorithms/bubbleSort.js');

describe('bubbleSort', () => {
  test('should sort from min to max when called with no comparator', () => {
    const array = [3, 7, 8, 1, 9, 4, 6, 5, 2, 0];
    const sortedArray = bubbleSort(array);

    expect(sortedArray).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('should sort non-integers', () => {
    const array = ['b', 'h', 'a', 'e', 'j', 'd', 'i', 'c', 'g', 'f'];
    const sortedArray = bubbleSort(array);

    expect(sortedArray).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
  });

  test('should sort using a comparator', () => {
    const array = [3, 7, 8, 1, 9, 4, 6, 5, 2, 0];
    const comparator = function (a, b) { return a > b };
    const sortedArray = bubbleSort(array, comparator);

    expect(sortedArray).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });

  test('should sort duplicate values', () => {
    const array = [3, 7, 8, 3, 4, 7, 8, 8, 9, 0];
    const sortedArray = bubbleSort(array);

    expect(sortedArray).toEqual([0, 3, 3, 4, 7, 7, 8, 8, 8, 9]);
  });

  test('should be a stable sort', () => {
    const array = [
      {value: 1, order: 1},
      {value: 1, order: 2},
      {value: 0, order: 1},
      {value: 1, order: 3},
      {value: 0, order: 2}
    ];
    const comparator = function(a, b) { return a.value < b.value };
    const sortedArray = bubbleSort(array, comparator);

    expect(sortedArray).toEqual([
      {value: 0, order: 1},
      {value: 0, order: 2},
      {value: 1, order: 1},
      {value: 1, order: 2},
      {value: 1, order: 3}
    ]);
  });

  test('should return the input array', () => {
    const array = [3, 7, 8, 1, 9, 4, 6, 5, 2, 0];
    const sortedArray = bubbleSort(array);

    expect(sortedArray).toBe(array);
  });

  test('should mutate the input array', () => {
    const array = [3, 7, 8, 1, 9, 4, 6, 5, 2, 0];
    const sortedArray = bubbleSort(array);

    expect(array).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('should return the same empty array passed in when given an empty array', () => {
    const array = [];
    const sortedArray = bubbleSort(array);

    expect(sortedArray).toEqual([]);
    expect(sortedArray).toBe(array);
  });

  test('should return the same single-entry array passed in when given a single-entry array', () => {
    const array = [0];
    const sortedArray = bubbleSort(array);

    expect(sortedArray).toEqual([0]);
    expect(sortedArray).toBe(array);
  });

  test('should throw a TypeError when given a non-array', () => {
    const boolean = false;
    const object = { isValidInput: false };
    const number = 42;
    const string = 'not valid';

    expect(() => { bubbleSort(null) }).toThrow(TypeError);
    expect(() => { bubbleSort(undefined) }).toThrow(TypeError);
    expect(() => { bubbleSort(boolean) }).toThrow(TypeError);
    expect(() => { bubbleSort(object) }).toThrow(TypeError);
    expect(() => { bubbleSort(number) }).toThrow(TypeError);
    expect(() => { bubbleSort(string) }).toThrow(TypeError);
  });

  test('should use the default sort if given a non-function for the comparator', () => {
    const array = [3, 7, 8, 1, 9, 4, 6, 5, 2, 0];
    const boolean = false;
    const object = { isValidInput: false };
    const number = 42;
    const string = 'not valid';

    expect(bubbleSort(array, null)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(bubbleSort(array, undefined)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(bubbleSort(array, boolean)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(bubbleSort(array, object)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(bubbleSort(array, array)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(bubbleSort(array, number)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(bubbleSort(array, string)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});