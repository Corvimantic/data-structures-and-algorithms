/* ***
Optional: pass in a function to use as a comparator.
The parent node's value will be passed in as the first argument,
and the child node's value will be passed in as the second.
The function should return true if the nodes are in a valid relation and false if not.
If no comparator is specified, the heap will default to a min heap.
*** */
const BinaryHeap = function(comparator) {
  if (!comparator) {
    comparator = function (a, b) { return a < b };
  }
  this._heap = [];
  this._isValid = comparator;
};

/* Methods */

BinaryHeap.prototype.getRoot = function() {
  return this._heap[0];
};

// Insert either a single value or an array of values
BinaryHeap.prototype.insert = function(val) {
  if (Array.isArray(val)) {
    val.forEach((val) => {
      this._heap.push(val);
      this._moveChild(this._heap.length - 1);
    });
  } else {
    this._heap.push(val);
    this._moveChild(this._heap.length - 1);
  }
};

BinaryHeap.prototype.removeFromEnd = function() {
  return this._heap.pop();
};

BinaryHeap.prototype.removeRoot = function() {
  this._swapNodes(0, this._heap.length - 1);
  const rootVal = this.removeFromEnd();
  this._moveParent(0);
  return rootVal;
};

/* "Private" methods */

BinaryHeap.prototype._moveChild = function(childIndex) {
  const parentIndex = calculateParentIndex(childIndex);
  if (parentIndex < 0) {
    return;
  }
  if (!this._isValid(this._heap[parentIndex], this._heap[childIndex])) {
    this._swapNodes(childIndex, parentIndex);
    return this._moveChild(parentIndex);
  }
};

BinaryHeap.prototype._moveParent = function(parentIndex) {
  const childIndex = this._findChildToSwap(calculateChildIndices(parentIndex));
  if (childIndex > this._heap.length - 1) {
    return;
  }
  if (!this._isValid(this._heap[parentIndex], this._heap[childIndex])) {
    this._swapNodes(childIndex, parentIndex);
    return this._moveParent(childIndex);
  }
};

BinaryHeap.prototype._swapNodes = function(index1, index2) {
  const val1 = this._heap[index1];
  const val2 = this._heap[index2];
  this._heap[index2] = val1;
  this._heap[index1] = val2;
};

BinaryHeap.prototype._findChildToSwap = function(childIndices) {
  const child1 = this._heap[childIndices[0]];
  const child2 = this._heap[childIndices[1]];
  if (child2 === undefined) {
    return childIndices[0];
  }
  if (this._isValid(child1, child2)) {
    return childIndices[0];
  }
  return childIndices[1];
}

/* Helper functions */

const calculateParentIndex = function(childIndex) {
  return Math.floor((childIndex - 1) / 2);
};

const calculateChildIndices = function(parentIndex) {
  return [parentIndex * 2 + 1, parentIndex * 2 + 2];
};