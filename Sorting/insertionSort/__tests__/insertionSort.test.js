'use strict';

const insertionSort = require('../insertionSort');

describe('insertion sort functionality', () => {
  it('should work with an empty array', () => {
    const arr = [];
    insertionSort(arr);
    expect(arr).toEqual([]);
  });
  it('should sort an array sorted from smallest to largest', () => {
    const arr = [3, 57, 33, 9, 81];
    insertionSort(arr);
    expect(arr).toEqual([3, 9, 33, 57, 81]);
  });
  it('should reverse a sorted array', () => {
    const arr = [81, 57, 33, 9, 3];
    insertionSort(arr);
    expect(arr).toEqual([3, 9, 33, 57, 81]);
  });
  it('should sort an array with few uniques', () => {
    const arr = [3, 4, 5, 3, 5, 3];
    insertionSort(arr);
    expect(arr).toEqual([3, 3, 3, 4, 5, 5]);
  });
  it('should sort an array that is nearly sorted', () => {
    const arr = [3, 9, 33, 81, 57];
    insertionSort(arr);
    expect(arr).toEqual([3, 9, 33, 57, 81]);
  });
});