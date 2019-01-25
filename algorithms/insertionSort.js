/* ***
Optional: pass in a function to use as a comparator.
If no comparator is specified, the function will default to sorting least to greatest.
This algorithm sorts an array in place and WILL mutate the input array.
*** */
const insertionSort = function(array, comparator) {
  if (!Array.isArray(array)) {
    throw new TypeError('Input was not an array');
  }
  if (!comparator) {
    comparator = function(a, b) { return a < b };
  }

  for (var i = 1; i < array.length; i++) {
    const item = array.splice(i, 1)[0];

    for (var j = 0; j < i + 1; j++) {
      if (j === i) {
        array.splice(j, 0, item);
      }
      if (comparator(item, array[j])) {
        array.splice(j, 0, item);
        break;
      }
    }
  }
  return array;
};

module.exports = insertionSort;