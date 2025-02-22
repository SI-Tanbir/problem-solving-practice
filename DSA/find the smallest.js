let d = [5, 15, 22, -1, -15, 2];

let s = []; // Initialize with the first element

for (let i of d) {
  if (i < s) {
    s = i; // Update if we find a smaller value
  }
}

console.log('Minimum value:', s);
