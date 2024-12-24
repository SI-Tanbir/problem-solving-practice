function sortColors(arr) {

    let low = 0, mid = 0, high = arr.length - 1;

    // Loop through the array

    while (mid <= high) {
        if (arr[mid] === 0) {
            // Swap arr[low] and arr[mid], then move both pointers forward
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            // If it's 1, just move the mid pointer forward
            mid++;
        } else if (arr[mid] === 2) {
            // Swap arr[mid] and arr[high], then move high pointer backward
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
    
    return arr;

    // Uare@greate1
}

// Example usage:
const arr = [2, 0, 1, 2, 0, 1];
console.log(sortColors(arr)); // Output: [0, 0, 1, 1, 2, 2]
