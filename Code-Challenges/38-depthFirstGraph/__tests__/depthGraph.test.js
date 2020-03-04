'use strict';

const {Graph} = require('../../../Data-Structures/Graph/graph');
const {Vertex} = require('../../../Data-Structures/Graph/graph');
const depthFirst = require('../depthGraph');

describe('graph functionality', () => {

  let graph;

  let vertex1;
  let vertex2;
  let vertex3;
  let vertex4;
  let vertex5;
  let vertex6;
  let vertex7;
  let vertex8;

  beforeEach(() => {
    graph = new Graph();

    vertex1 = new Vertex(1);
    vertex2 = new Vertex(2);
    vertex3 = new Vertex(3);
    vertex4 = new Vertex(4);
    vertex5 = new Vertex(5);
    vertex6 = new Vertex(6);
    vertex7 = new Vertex(7);
    vertex8 = new Vertex(8);


    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addVertex(vertex3);
    graph.addVertex(vertex4);
    graph.addVertex(vertex5);
    graph.addVertex(vertex6);
    graph.addVertex(vertex7);
    graph.addVertex(vertex8);

    graph.addDirectedEdge(1,2);
    graph.addDirectedEdge(2,1);
    graph.addDirectedEdge(2,3);
    graph.addDirectedEdge(3,2);
    graph.addDirectedEdge(3,7);
    graph.addDirectedEdge(7,3);
    graph.addDirectedEdge(2,4);
    graph.addDirectedEdge(4,2);
    graph.addDirectedEdge(1,4);
    graph.addDirectedEdge(4,1);
    graph.addDirectedEdge(4,5);
    graph.addDirectedEdge(5,4);
    graph.addDirectedEdge(4,6);
    graph.addDirectedEdge(6,4);
    graph.addDirectedEdge(4,8);
    graph.addDirectedEdge(8,4);
  });

  describe('depth first travel', () => {
    it('should return null if graph is empty', () => {

    });

    it('returns null if input is not a graph', () => {
      
    });

    it('should return a list of values in depth first order', () => {

    });

  });
});