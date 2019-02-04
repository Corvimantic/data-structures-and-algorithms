const Tree = function(value) {
  this.value = value;
  this.children = [];
}

Tree.prototype.addChild = function(value) {
  this.children.push(new Tree(value));
};

module.exports = Tree;