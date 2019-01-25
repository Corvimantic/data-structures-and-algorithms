const BinaryHeap = require('../data-structures/BinaryHeap.js');

describe('BinaryHeap', () => {
  test('should create a min heap when initialized with no comparator', () => {
    const heap = new BinaryHeap();
    heap.insert([1, 3, 7, 4, 9, 2, 0]);

    expect(heap._heap).toEqual([0, 3, 1, 4, 9, 7, 2]);
  });

  test('should create a heap using a comparator when provided with one', () => {
    const maxHeapComparator = function(a, b) { return a > b };
    const heap = new BinaryHeap(maxHeapComparator);
    heap.insert([1, 3, 7, 4, 9, 2, 0]);

    expect(heap._heap).toEqual([9, 7, 3, 1, 4, 2, 0]);
  });
});