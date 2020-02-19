'use strict';

const mergeSort = require('../mergeSort');

describe('insertion sort functionality', () => {
  it('should work with an empty array', () => {
    const arr = [];
    expect(mergeSort(arr)).toEqual([]);
  });
  it('should sort an array sorted from smallest to largest', () => {
    const arr = [3, 57, 33, 9, 81];
    expect(mergeSort(arr)).toEqual([3, 9, 33, 57, 81]);
  });
  it('should reverse a sorted array', () => {
    const arr = [81, 57, 33, 9, 3];
    expect(mergeSort(arr)).toEqual([3, 9, 33, 57, 81]);
  });
  it('should sort an array with few uniques', () => {
    const arr = [3, 4, 5, 3, 5, 3];
    expect(mergeSort(arr)).toEqual([3, 3, 3, 4, 5, 5]);
  });
  it('should sort an array that is nearly sorted', () => {
    const arr = [3, 9, 33, 81, 57];
    expect(mergeSort(arr)).toEqual([3, 9, 33, 57, 81]);
  });
});