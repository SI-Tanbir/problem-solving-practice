let d = [4, 2, 7, 8, 1, 2, 5];

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap elements at left and right indices
    [arr[left], arr[right]] = [arr[right], arr[left]];

    // Move pointers towards the center
    left++;
    right--;
  }

  return arr;
}

console.log(reverseArray(d));
