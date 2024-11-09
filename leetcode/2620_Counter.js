// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).



/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = n; // Initialize count with the given value of n
   return function() {

        return count++; // Return current count, then increment for next call
   };
};

/** 
* const counter = createCounter(10)
* counter() // 10
* counter() // 11
* counter() // 12
*/