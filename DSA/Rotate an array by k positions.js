function rotateArrayInPlace(arr, k) {
    k = k % arr.length;

    function reverse(subArr, start, end) {
        while (start < end) {
            [subArr[start], subArr[end]] = [subArr[end], subArr[start]];
            start++;
            end--;
        }
    }

    reverse(arr, 0, arr.length - 1);  // Reverse entire array
    reverse(arr, 0, k - 1);          // Reverse first k elements
    reverse(arr, k, arr.length - 1); // Reverse the rest
}

// Example usage
let array = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
rotateArrayInPlace(array, k);
console.log(array); // Output: [5, 6, 7, 1, 2, 3, 4]
