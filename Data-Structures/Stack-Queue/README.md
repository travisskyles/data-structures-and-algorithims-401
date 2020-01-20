# Stacks and Queues

- A stack is a data structure that places nodes in a columns and both adds and removes from the top of the stack.
- A queue is a data structure that places nodes in a horizontal list and adds nodes to the back and removes them from the front.

## Challenge

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
- Create Stack and Queue classes that can add, remove, check the value of and check whether they are empty.

## Approach & Efficiency
I created Node, Stack, and Queue classes that each have corresponding methods. The methods are made to be as efficient as possible.

Stack: 
  * O(1) - push, pop, peek, isEmpty
Queue: 
  * O(1) - enqueue, dequeue, peek, isEmpty

## API

### Stack
* push(value) - adds to top of stack
* pop() - removes from top of stack
* peek() - returns value of top node
* isEmpty() - returns boolean based on whether stack is empty

### Queue
* enqueue(value) - adds to end of queue
* dequeue() - removes from front of queue
* peek() - returns value at front of queue
* isEmpty() - returns boolean based of whether queue is empty

### Links and Resources
* [submission PR](https://github.com/tskyles-401-advanced-javascript/data-structures-and-algorithims/pull/7)
* [travis-ci](https://travis-ci.com/tskyles-401-advanced-javascript/data-structures-and-algorithims)

#### Documentation
Run live-server on /doc files for full code documentation
* [Link to documentation](https://github.com/tskyles-401-advanced-javascript/data-structures-and-algorithims/tree/stack-queue/Data-Structures/Stack-Queue/docs)

### Solutions

[push/enqueue, pop/dequeue, peek, isEmpty](./assets/stack-queue-init.jpg)


