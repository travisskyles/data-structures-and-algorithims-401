# Graphs
A graph is a non-linear data structure consisting of nodes and edges.

## Challenge
* addNode()
* addEdge()
* getNodes()
Returns all of the nodes in the graph as a collection (set, list, or similar)
* getNeighbors()
Returns a collection of edges connected to the given node
Takes in a given node
Include the weight of the connection in the returned collection
* size()
Returns the total number of nodes in the graph
* breadthFirst()
Traverses the graph using a breadth first approach

## Approach & Efficiency
The approaches I used use different efficiencies. Overall, I store all my graph data into a Map constructor which allows me the ability to store key/value pairs. The base efficiency for a lot of these approaches are 0(n).

## API
* `addNode()` - Adds node to the map constructor
* `addEdge()` - Adds a new edge between two nodes in the graph. 
* `getNodes()` - Returns all of the nodes in a graph as a collection.
* `getNeighbors()` - Returns a collection of edges connected to a given node.
* `size()` - Returns the total number of nodes in the graph
* `breadthFirst()` - Traverses the graph and outputs values using breadth first travesal.

### Links and Resources
* [submission PR](https://github.com/tskyles-401-advanced-javascript/data-structures-and-algorithims/pull/23)
* [travis-ci](https://travis-ci.com/tskyles-401-advanced-javascript/data-structures-and-algorithims)

#### Documentation
Run live-server on /doc files for full code documentation
* [Link to documentation](https://github.com/tskyles-401-advanced-javascript/data-structures-and-algorithims/tree/master/Data-Structures/LinkedList/docs)

### Solutions

![Graph](assets/graph.jpg)