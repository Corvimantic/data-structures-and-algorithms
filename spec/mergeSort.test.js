const mergeSort = require('../algorithms/mergeSort.js'); 

describe('mergeSort', () => {
  test('should sort from min to max when called with no comparator', () => {
    const array = [3, 7, 8, 1, 9, 4, 6, 5, 2, 0];
    const sortedArray = mergeSort(array);

    expect(sortedArray).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  
  test('should sort non-integers', () => {
    const array = ['b', 'h', 'a', 'e', 'j', 'd', 'i', 'c', 'g', 'f'];
    const sortedArray = mergeSort(array);

    expect(sortedArray).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
  });

  test('should sort using a comparator', () => { 
    const array = [3, 7, 8, 1, 9, 4, 6, 5, 2, 0];
    const comparator = function (a, b) { return a > b };
    const sortedArray = mergeSort(array, comparator);

    expect(sortedArray).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });
  
  test('should sort duplicate values', () => {
    const array = [3, 7, 8, 3, 4, 7, 8, 8, 9, 0];
    const sortedArray = mergeSort(array);

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
    const sortedArray = mergeSort(array, comparator); 
    
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
    const sortedArray = mergeSort(array);

    expect(sortedArray).toBe(array);
  });

  test('should mutate the input array', () => {
    const array = [3, 7, 8, 1, 9, 4, 6, 5, 2, 0];
    const sortedArray = mergeSort(array);

    expect(array).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  
  test('should return the same empty array passed in when given an empty array', () => {
    const array = [];
    const sortedArray = mergeSort(array);

    expect(sortedArray).toEqual([]);
    expect(sortedArray).toBe(array);
  });
  
  test('should return the same single-entry array passed in when given a single-entry array', () => {
    const array = [0];
    const sortedArray = mergeSort(array);

    expect(sortedArray).toEqual([0]);
    expect(sortedArray).toBe(array);
  });
  
  test('should throw a TypeError when given a non-array', () => {
    const boolean = false;
    const object = { isValidInput: false };
    const number = 42;
    const string = 'not valid'; 

    expect(() => { mergeSort(null) }).toThrow(TypeError);
    expect(() => { mergeSort(undefined) }).toThrow(TypeError);
    expect(() => { mergeSort(boolean) }).toThrow(TypeError);
    expect(() => { mergeSort(object) }).toThrow(TypeError);
    expect(() => { mergeSort(number) }).toThrow(TypeError);
    expect(() => { mergeSort(string) }).toThrow(TypeError);
  });
  
  test('should use the default sort if given a non-function for the comparator', () => {
    const array = [3, 7, 8, 1, 9, 4, 6, 5, 2, 0];
    const boolean = false;
    const object = { isValidInput: false };
    const number = 42;
    const string = 'not valid'; 

    expect(mergeSort(array, null)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(mergeSort(array, undefined)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(mergeSort(array, boolean)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(mergeSort(array, object)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(mergeSort(array, array)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(mergeSort(array, number)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(mergeSort(array, string)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
}); 