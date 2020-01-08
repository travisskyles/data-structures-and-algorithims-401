'use strict';

const binarySearch = require('../arrayBinarySearch');

describe('Make sure that the binarySearch functions works correctly', () => {
  // it should return the correct index from a sorted array
  const sortedArray = [1,2,3,4,5,6,7,8,9];
  it('should return the correct index of the matching value if in the middle', () => {
    expect(binarySearch(sortedArray, 5)).toBe(4);
  });
  it('should return the correct index of the matching value if the value is toward the beginning', () => {
    expect(binarySearch(sortedArray, 1)).toBe(0);
    expect(binarySearch(sortedArray, 2)).toBe(1);
    expect(binarySearch(sortedArray, 3)).toBe(2);
    expect(binarySearch(sortedArray, 4)).toBe(3);
  });
  it('should return the correct index of the matching value if the value is toward the end of the array', () => {
    expect(binarySearch(sortedArray, 6)).toBe(5);
    expect(binarySearch(sortedArray, 7)).toBe(6);
    expect(binarySearch(sortedArray, 8)).toBe(7);
    expect(binarySearch(sortedArray, 9)).toBe(8);
  });
  // it should return -1 if there is no matching value
  it('should return -1 if there is not a matching value', () => {
    expect(binarySearch(sortedArray, 11)).toBe(-1);

  });
});