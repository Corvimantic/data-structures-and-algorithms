// Optional: pass in a comparator to use for validation.
// Default checks to see if sorted from smallest to largest.
const isSorted = function(array, comparator) {
  if (typeof comparator !== 'function') {
    comparator = function(a, b) { return a < b };
  }
  
  for (var i = 0; i < array.length - 1; i++) {
    if (!comparator(array[i], array[i + 1]) && comparator(array[i + 1], array[i])) {
      return false;
    }
  }
  return true;
};

const isValidHeap = function(heap, comparator) {
  if (!heap.length) {
    return false;
  }
  if (typeof comparator !== 'function') {
    comparator = function(a, b) { return a < b };
  }
  
  for (var i = heap.length - 1; i >= 0; i--) {
    const parent = Math.floor((i - 1) / 2)
    if (!comparator(heap[parent], heap[i]) && comparator(heap[i], heap[parent])) {
      return false;
    }
  }
  return true;
};

/* Exports */

module.exports = {
  isSorted: isSorted,
};