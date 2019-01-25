const insertionSort = require('../algorithms/insertionSort.js'); 

describe('insertionSort', () => {
  test('should sort from min to max when called with no comparator', () => {
    const array = [3, 7, 8, 1, 9, 4, 6, 5, 2, 0];
    const sortedArray = insertionSort(array);

    expect(sortedArray).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  
  test('should sort duplicate values', () => {
    const array = [3, 7, 8, 3, 4, 7, 8, 8, 9, 0];
    const sortedArray = insertionSort(array);

    expect(sortedArray).toEqual([0, 3, 3, 4, 7, 7, 8, 8, 8, 9]);
  });
  
  test('should sort non-integers', () => {
    const array = ['b', 'h', 'a', 'e', 'j', 'd', 'i', 'c', 'g', 'f'];
    const sortedArray = insertionSort(array);

    expect(sortedArray).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
  });
  
  test('should return the same empty array passed in when given an empty array', () => {
    const array = [];
    const sortedArray = insertionSort(array);

    expect(sortedArray).toEqual([]);
    expect(sortedArray).toBe(array);
  });

  test('should sort using a comparator', () => { 
    const array = [3, 7, 8, 1, 9, 4, 6, 5, 2, 0];
    const comparator = function (a, b) { return a > b };
    const sortedArray = insertionSort(array, comparator);

    expect(sortedArray).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });

  test('should mutate the input array', () => {
    const array = [3, 7, 8, 1, 9, 4, 6, 5, 2, 0];
    const sortedArray = insertionSort(array);

    expect(sortedArray).toBe(array);
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
    const sortedArray = insertionSort(array, comparator); 
    
    expect(sortedArray).toEqual([
      {value: 0, order: 1}, 
      {value: 0, order: 2}, 
      {value: 1, order: 1}, 
      {value: 1, order: 2}, 
      {value: 1, order: 3}
    ]); 
  });
}); 