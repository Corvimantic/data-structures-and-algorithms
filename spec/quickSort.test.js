const quickSort = require('../algorithms/quickSort.js'); 

describe('quickSort', () => {
  test('should sort from min to max when called with no comparator', () => {
    const array = [3, 7, 8, 1, 9, 4, 6, 5, 2, 0];
    const sortedArray = quickSort(array);

    expect(sortedArray).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  
  test('should sort non-integers', () => {
    const array = ['b', 'h', 'a', 'e', 'j', 'd', 'i', 'c', 'g', 'f'];
    const sortedArray = quickSort(array);

    expect(sortedArray).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
  });

  test('should sort using a comparator', () => { 
    const array = [3, 7, 8, 1, 9, 4, 6, 5, 2, 0];
    const comparator = function (a, b) { return a > b };
    const sortedArray = quickSort(array, comparator);

    expect(sortedArray).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });
  
  test('should sort duplicate values', () => {
    const array = [3, 7, 8, 3, 4, 7, 8, 8, 9, 0];
    const sortedArray = quickSort(array);

    expect(sortedArray).toEqual([0, 3, 3, 4, 7, 7, 8, 8, 8, 9]);
  });

  test('should return the input array', () => {
    const array = [3, 7, 8, 1, 9, 4, 6, 5, 2, 0];
    const sortedArray = quickSort(array);

    expect(sortedArray).toBe(array);
  });

  test('should mutate the input array', () => {
    const array = [3, 7, 8, 1, 9, 4, 6, 5, 2, 0];
    const sortedArray = quickSort(array);

    expect(array).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  
  test('should return the same empty array passed in when given an empty array', () => {
    const array = [];
    const sortedArray = quickSort(array);

    expect(sortedArray).toEqual([]);
    expect(sortedArray).toBe(array);
  });
  
  test('should return the same single-entry array passed in when given a single-entry array', () => {
    const array = [0];
    const sortedArray = quickSort(array);

    expect(sortedArray).toEqual([0]);
    expect(sortedArray).toBe(array);
  });
  
  test('should throw a TypeError when given a non-array', () => {
    const boolean = false;
    const object = { isValidInput: false };
    const number = 42;
    const string = 'not valid'; 

    expect(() => { quickSort(null) }).toThrow(TypeError);
    expect(() => { quickSort(undefined) }).toThrow(TypeError);
    expect(() => { quickSort(boolean) }).toThrow(TypeError);
    expect(() => { quickSort(object) }).toThrow(TypeError);
    expect(() => { quickSort(number) }).toThrow(TypeError);
    expect(() => { quickSort(string) }).toThrow(TypeError);
  });
  
  test('should use the default sort if given a non-function for the comparator', () => {
    const array = [3, 7, 8, 1, 9, 4, 6, 5, 2, 0];
    const boolean = false;
    const object = { isValidInput: false };
    const number = 42;
    const string = 'not valid'; 

    expect(quickSort(array, null)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(quickSort(array, undefined)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(quickSort(array, boolean)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(quickSort(array, object)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(quickSort(array, array)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(quickSort(array, number)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(quickSort(array, string)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
}); 