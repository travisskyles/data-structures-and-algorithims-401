# Trees

Create a tree data structure similar to a linked list but each node can have right or left child nodes.

## Challenge

- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
- Create a BinaryTree class
- Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
- Create a BinarySearchTree class
- Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
- Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency
I created a node class that has a value, and left and right children properties. Then created BinaryTree and BinarySearchTree classes that can create tree structures out of Nodes.

* BinaryTree.preOrder() - O(n)
* BinaryTree.inOrder() - O(n)
* BinaryTree.postOrder() - O(n)
* BinarySearchTree.add(value) - O(n)
* BinarySearchTree.contains(value) - O(n)

### Links and Resources
* [submission PR]()
* [travis-ci]()

#### Documentation
Run live-server on /doc files for full code documentation

### Solutions

- [BinaryTree]()
- [BinarySearchTree]()