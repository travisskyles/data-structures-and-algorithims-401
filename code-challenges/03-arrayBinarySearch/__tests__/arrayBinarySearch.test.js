'use strict';

const binarySearch = require('../arrayBinarySearch');

describe('Make sure that the binarySearch functions works correctly', () => {
  // it should return the correct index from a sorted array
  const sortedArray = [1,2,3,4,5,6,7,8,9];
  it('should return the correct index of the matching value', () => {
    expect(binarySearch(sortedArray, 2)).toBe(1);
    expect(binarySearch(sortedArray, 8)).toBe(7);
    expect(binarySearch(sortedArray, 5)).toBe(4);
  });
  // it should return -1 if there is no matching value
});