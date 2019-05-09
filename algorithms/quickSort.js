/* Optional: pass in a function to use as a comparator.
 * If no comparator is specified, the function will default to sorting least to greatest.
 * This algorithm sorts an array in place and WILL mutate the input array. */
const quickSort = function(array, comparator) {
  if (!Array.isArray(array)) {
    throw new TypeError('Input was not an array');
  }
  if (typeof comparator !== 'function') {
    comparator = function(a, b) { return a < b };
  }

  recursivelySort(array, comparator, 0, array.length - 1); 
  return array;
}; 

/* Helpers */

var recursivelySort = function(array, comparator, start, end) {
  if (start === end) {
    return array; 
  }
  
  let l = start;
  let r = end - 1; 
  let p = end;
  
  while (l < p) {
    while (!comparator(array[p], array[l]) && l < end) {
      l++;
    }
    while (l < r && !comparator(array[r], array[p]) && r > start) {
      r--;
    }
    if (l === r) {
      swapItems(array, l, p);
      recursivelySort(array, comparator, start, l - 1);
      recursivelySort(array, comparator, l + 1, end);
      break;
    } else if (l === p) {
      recursivelySort(array, comparator, start, p - 1); 
      break;
    } else {
      swapItems(array, r, l); 
    }
  }
  
  return array;
};

var swapItems = function(array, first, second) {
  const secondItem = array[second];
  array[second] = array[first];
  array[first] = secondItem;
};

/* Export */ 

module.exports = quickSort;
