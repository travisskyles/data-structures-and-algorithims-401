# Singly Linked List

Create a singly liked list module.

## Challenge

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
- Create insert(value) method to add to the list.
- Create includes(value) to check for if a value is in the list.
- Create toString() to generate a string representation of the list and its values.
- Create append(value) to add a new node with a given value to the end of the list.
- Create insertBeforeValue(value, newValue) to add a new node with a given value immediately before the first value node.
- Create insertAfter(value, newValue) to add a new node with a given value immediately after the first value node.
- Create kthFromEnd(k) which takes a number,k, and returns the value of the node that is kth from the end of the list

## Approach & Efficiency
I created a Node class that stores the value as well as the connection to the next node. Then I created a class for the list itself to track what the head of the list is pointing to.

insert()-O(n)
toString()-O(n)
append()-O(n)
insertBeforeValue()-O(n)
insertAfterValue()-O(n)
kthFromEnd-O(n)

### Links and Resources
* [submission PR](https://github.com/tskyles-401-advanced-javascript/data-structures-and-algorithims/pull/5)
* [travis-ci](https://travis-ci.com/tskyles-401-advanced-javascript/data-structures-and-algorithims)

#### Documentation
Run live-server on /doc files for full code documentation
* [Link to documentation](https://github.com/tskyles-401-advanced-javascript/data-structures-and-algorithims/tree/master/Data-Structures/LinkedList/docs)

### Solutions

[kthFromEnd](./assets/ll-kthFromEnd.jpg)

