# MERGE SORT

## PSUEDO CODE
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

## Sample Array

[8, 4, 23, 42, 16, 15]

## Walkthrough

![](./assets/merge.jpg)
Merge sort uses a divide and conquer approach to sort data. It begins by breaking up the data set into two halves. It then uses recursion to continue to divide each half until it reaches a point in which it has individual data points (steps 1-3 in diagram). At that point the it begins to compare the values and merge them back together in the correct order (steps 4-6 in diagram). 

## Efficiency
Time: O(n log n)

Space: O(n)

## Testing
[Link to Travis-ci](https://travis-ci.com/tskyles-401-advanced-javascript/data-structures-and-algorithims/builds/149751937)