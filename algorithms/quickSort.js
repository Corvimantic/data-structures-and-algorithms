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

const recursivelySort = function(array, comparator, start, end) {
  if (start - end > -1) {
    return;
  }
  const pivot = sortPivot(array, comparator, start, end);
  recursivelySort(array, comparator, start, pivot - 1);
  recursivelySort(array, comparator, pivot + 1, end);
}; 

const sortPivot = function(array, comparator, start, end) {
  let p = end;
  let l = start;
  let r = end - 1; 
  while (l <= p) {
    if (l === p) {
      return p;
    }
    while (comparator(array[l], array[p])) {
      l++;
    }
    while (l <= r && !comparator(array[r], array[p])) {
      if (r === l) {
        swapItems(array, r, p);
        return r;
      }
      r--;
    }
    if (l < r) {
      swapItems(array, l, r);  
    }
  }
}; 

const swapItems = function(array, a, b) {
  const firstItem = array[a];
  const secondItem = array[b];
  array[a] = secondItem;
  array[b] = firstItem; 
}; 

/* Export */ 

module.exports = quickSort;