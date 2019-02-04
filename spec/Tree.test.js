const Tree = require('../data-structures/Tree.js');

describe('Tree', () => {
  test('should create an instance with a node of the provided value', () => {
    const tree = new Tree(0);
    expect(tree.value).toBe(0);
  });

  test('should add a child with .addChild', () => {
    const tree = new Tree(0);
    tree.addChild(1);
    expect(tree.children[0]).toEqual({ value: 1, children: [] });
  });
});