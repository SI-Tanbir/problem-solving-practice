let n = 5; // Size of the square pattern
let p = 64;
for (let i = 1; i <= n; i++) {
  let row = ''; // Create a row for the current line
  p++;
  for (let j = 0; j < i; j++) {
    row += String.fromCharCode(p);
    // Append the current number and increment `p`
  }
  console.log(row); // Print the current row
}
