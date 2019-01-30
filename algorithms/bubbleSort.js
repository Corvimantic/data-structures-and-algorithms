const bubbleSort = function(array, comparator) {
  if (!Array.isArray(array)) {
    throw new TypeError;
  }
  if (typeof comparator !== 'function') {
    comparator = function(a, b) { return a < b };
  }

  let sortedIndex = 0;
  while (sortedIndex < array.length) {
    for (var i = array.length - 1; i > sortedIndex; i--) {
      if (!comparator(array[i - 1], array[i]) && comparator(array[i], array[i - 1])) {
        swapItems(array, i, i - 1);
      }
    }
    sortedIndex++;
  }
  return array;
};

const swapItems = function(array, a, b) {
  const item1 = array[a];
  const item2 = array[b];
  array[a] = item2;
  array[b] = item1;
};

module.exports = bubbleSort;