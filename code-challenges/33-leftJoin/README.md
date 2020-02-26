# Left Join Challenge

Implement a simplified LEFT JOIN for 2 Hashmaps.

## Challenge

* Write a function that LEFT JOINs two hashmaps into a single data structure.
* The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
* The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
* Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
* LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.

## Approach & Efficiency
* `leftJoin` - 0(n)

## API
* `leftJoin(mapA, mapB)` - Takes in two hashmaps and returns values in first hashmap and if values exist in the right they are appended to the results.


## Links and Resources

[Submission PR](https://github.com/tskyles-401-advanced-javascript/data-structures-and-algorithims/pull/22)

[Travis-ci](https://travis-ci.com/tskyles-401-advanced-javascript/data-structures-and-algorithims)

#### Documentation
Run live-server on /doc files for full code documentation

## Solution

![](../assets/33-leftJoin.jpg)

