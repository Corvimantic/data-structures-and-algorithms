const mergeSort = function(array, comparator) {
  if (!Array.isArray(array)) {
    throw new TypeError('Input was not an array');
  }
  if (typeof comparator !== 'function') {
    comparator = function(a, b) { return a < b }; 
  }
  
  return recursivelySort(array, comparator); 
}

const recursivelySort = function(array, comparator) {
  if (array.length < 2) {
    return array;
  }
  const halves = halveArray(array);
  const sort1 = recursivelySort(halves[0], comparator);
  const sort2 = recursivelySort(halves[1], comparator);
  return mergeSubArrays(sort1, sort2, array, comparator);
}

const halveArray = function(array) {
  const midpoint = Math.floor(array.length / 2);
  return [array.splice(0, midpoint), array.splice(0, array.length)]; 
}

const mergeSubArrays = function(first, second, array, comparator) {
  let i1 = 0;
  let i2 = 0;
  while (i1 < first.length && i2 < second.length) {
    if (!comparator(first[i1], second[i2]) && comparator(second[i2], first[i1])) {
      array.push(second[i2]);
      i2++; 
    } else {
      array.push(first[i1]); 
      i1++; 
    }
  }
  if (i1 < first.length) {
    pushRemainder(first, i1, array);
  }
  if (i2 < second.length) {
    pushRemainder(second, i2, array);
  }
  return array; 
};

const pushRemainder = function(remainder, start, merged) {
  for (var i = start; i < remainder.length; i++) {
    merged.push(remainder[i]); 
  } 
}

module.exports = mergeSort; 