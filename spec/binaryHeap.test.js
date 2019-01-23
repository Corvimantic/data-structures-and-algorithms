const BinaryHeap = require('../data-structures/BinaryHeap.js');

test('should create a min heap when initialized with no comparator', () => {
  const heap = new BinaryHeap();
  heap.insert(generateRandomArray(10))
  console.log(heap);
  expect(isValidMinHeap(heap._heap)).toBe(true);
});

test('should create a heap using a comparator when provided with one', () => {
  const maxHeapComparator = function(a, b) { return a > b };
  const heap = new BinaryHeap(maxHeapComparator);
  heap.insert(generateRandomArray(10))
  console.log(heap);
  expect(isValidMaxHeap(heap._heap)).toBe(true);
});

/* Helpers */

const isValidMinHeap = function(heap) {
  if (!heap.length) {
    return false;
  }
  for (var i = heap.length - 1; i >= 0; i--) {
    const parent = Math.floor((i - 1) / 2)
    if (heap[parent] > heap[i]) {
      return false;
    }
  }
  return true;
};

const isValidMaxHeap = function(heap) {
  if (!heap.length) {
    return false;
  }
  for (var i = heap.length - 1; i >= 0; i--) {
    const parent = Math.floor((i - 1) / 2)
    if (heap[parent] < heap[i]) {
      return false;
    }
  }
  return true;
};

const generateRandomArray = function(length) {
  const result = [];
  for (var i = 0; i < length; i++) {
    result.push(generateRandomInt());
  }
  return result;
};

const generateRandomInt = function() {
  return Math.floor(Math.random() * 50);
};